import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { selectUser } from '../../userSlice'
import Navbar from '../Navbar/Navbar'
import Plans from '../Plans/Plans'
import './Profile.scss'

function Profile() {
    const user = useSelector(selectUser)
  return (
    <div className='profile-screen'>
        <Navbar/>
        <div className="profile-screen-body">
            <h1>Edit Profile</h1>
            <div className="profile-screen-info">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg" 
                    alt="" 
                />
                <div className="profile-screen-details">
                    <h2>{user.email}</h2>
                    <div className="profile-screen-plans">
                        <h3>Plans</h3>
                        <Plans/>
                        <button 
                            onClick={() =>auth.signOut()}
                            className="profile-screen-sign-out">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile