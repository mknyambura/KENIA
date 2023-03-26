import React, { useRef } from 'react'
import './SignIn.scss'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// import 'firebase/auth';
// import firebase from '@firebase/app';
import {auth} from '../../firebase'
// require('firebase/auth');


function SignIn() {
    const emailReference = useRef(null);
    const passwordReference = useRef(null)
    
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailReference.current.value,
            passwordReference.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
        .catch(error => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailReference.current.value,
            passwordReference.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className='sign-in-screen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailReference} type="email" className="sign-in-input" placeholder='Email Address'/>
                <input ref={passwordReference} type="password" className="sign-in-password" placeholder='Password' />
                <button type="submit" className="sign-in-button" onClick={signIn}>Sign In</button>
                <h4>
                    <span className='sign-up-gray'>New to Kenia? </span>
                    <span className="sign-up-link" onClick={register}>Sign Up Now!</span>
                </h4>
            </form>
        </div>
    )
}

export default SignIn