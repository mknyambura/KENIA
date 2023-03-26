import React, { useState } from 'react'
import SignIn from '../SignIn/SignIn'
import './Login.scss'

function Login() {
    const [signIn, setSignIn] = useState(false)


  return (
    <div className='login-screen'>
        <div className="login-screen-background">
            <div className="login-screen-logo">
              <h1 id='k'>K</h1>
              <div id='e'>
                <span id='black'><h2>I</h2></span>
                <span id='white'><h2>I</h2></span>
                <span id='red'><h2>I</h2></span>
                <span id='white'><h2>I</h2></span>
                <span id='green'><h2>I</h2></span>
              </div>
              <h1 id='nia'>NIA</h1>
            </div>
            <button className='login-screen-sign-in' onClick={() => setSignIn(true)}>Sign In</button>
            <div className="login-screen-gradient"></div>
        </div>
        <div className="login-screen-body">
            {signIn ? (
                <SignIn/>
            ) : (
                <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                    <div className="login-screen-input">
                        <form>
                            <input type="email" placeholder='Email Address' />
                            <button className="login-screen-get-started" onClick={() => setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default Login