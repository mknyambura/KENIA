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


function App() {
  const user = null;

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        console.log(userAuth)
      } else {

      }
    })
  
  }, [])
  

  return (
  <div className='app'>
    <Router>
      {!user ? (
        <Login/>
      ) :(
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
        </Routes>
      )}
    </Router>
  </div>
  );
}

export default App;
