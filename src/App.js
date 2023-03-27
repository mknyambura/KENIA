import './App.scss';
import Login from './components/Login/Login';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {toast} from 'react-toastify';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './userSlice';
import Profile from './components/Profile/Profile';
import Loading from './components/Loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        // console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  
  const errorOccurred = (error) => {
    setLoading(false);
    toast.error(`Error Occurred: ${error.message}`);
    console.log(error.message);
  }


  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login/>
        ) :(
          <Routes>
            <Route exact path='/profile'element={<Profile/>}/>
            <Route exact path="/" element={<HomeScreen/>}/>
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App;
