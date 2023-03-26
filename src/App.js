import './App.scss';
import Login from './components/Login/Login';
import HomeScreen from './components/HomeScreen/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './userSlice';
import Profile from './components/Profile/Profile';


function App() {
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
