import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import db from '../../firebase'
import { selectUser } from '../../userSlice'
import './Plans.scss'

function Plans() {
    const [products, setProducts] = useState([])
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null)
    
    useEffect(() => {
      db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").get();
            priceSnap.docs.forEach((price) => {
                products[productDoc.id].prices = {
                    priceId: price.id,
                    priceData: price.data()
                };
            });
        });
        setProducts(products);
      });
    }, []);

    console.log(products)

    useEffect(() => {
      db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async subscription => {
            console.log(subscription.data)
            setSubscription({
                role: subscription.data().role,
                current_period_end: subscription.data().current_period_end.seconds,
                current_period_start: subscription.data().current_period_start.seconds,
            })
        })
      })
    }, [user.uid])
    
    
    const loadCheckout = async (priceId) => {
        const documentRef = await db.collection('customers')
        .doc(user.uid)
        .collection('checkout-sessions')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
        documentRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error){
                alert(`An error occured: ${error.message}`)
            }

            if (sessionId){
                const stripe = await loadStripe('pk_test_51Mpx9mFgQoV7ZISbGzOpVfgOAQ3wemtzoRyVH7Oqx0EvUS5HXbTOnmvXu359Z2s4tuw2HeIQetPVNr6yJ2aIi4LE003TNeaPaP');
                stripe.redirectToCheckout({ sessionId });
            }
        })
    }
    return (
      <div className='plans-screen'>
        {subscription && (<p>Renewal Date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>)}
        {Object.entries(products).map(([productId, productData]) => {
            //TODO: check if users subscription is active
            const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);


            return (
                <div 
                    key={productId}
                    className={`${isCurrentPackage && "plans-screen-disabled"} plans-screen-plans`}>
                    <div className="plans-screen-info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>{isCurrentPackage ? 'Current Package' : 'Subscribe'}</button>
                </div>
            );
        })}    
      </div>
    )
}

export default Plans