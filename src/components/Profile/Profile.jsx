import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'
import { selectUser } from '../../userSlice'
import Navbar from '../Navbar/Navbar'
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
                        <p>Renewal Date: 04/03/2023</p>
                        <div className="profile-screen-subscriptions">
                            <form className="basic">
                                <div>
                                    <h4>Kenia Bsic</h4>
                                    <h6>480p</h6>
                                </div>
                                <button className="basic" type="submit">Subscribe</button>
                            </form>
                            <form className="standard">
                                <div>
                                    <h4>Kenia Standard</h4>
                                    <h6>1080p</h6>
                                </div>
                                <button className="standard" type="submit">Subscribe</button>
                            </form>
                            <form className="premium">
                                <div>
                                    <h4>Kenia Premium</h4>
                                    <h6>4K + HDR</h6>
                                </div>
                                <button className="premium" type="submit">Subscribe</button>
                            </form>
                        </div>
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