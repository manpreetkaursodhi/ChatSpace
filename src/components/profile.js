import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { Navbar } from './Navbar.js'
import imgsrc from '../assets/fisherman-6977946_960_720 (1).jpg';

const ProfileSection = (props)=>{
    return (
        <div className="profile">
        <div><Navbar /></div>
        <div className="profile_head"><h1>Profile</h1></div>
            <div className="profileSubHead">
                <img src={imgsrc} alt="user"/>
                <div className="user-name">Name: {props.user}<div >Username: {props.name}<div>DOB: {props.dob}</div></div></div>
            </div>
            <div className="follow">
                <h3><Link to="/followers">28 Followers</Link></h3>
                <h3><Link to="/following">37 Following</Link></h3>
            </div>
            </div>
    )
}

export default ProfileSection;