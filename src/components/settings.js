import React from "react";
import './style.css'
import { useState } from "react";
import { Navbar } from "./Navbar";

const Setting = (props) => {
    let users = props.user;
    let names = props.name;
    let dobs = props.dob;

    const [count1, setCount1] = useState(users);
    const [count2, setCount2] = useState(names);
    const [count3, setCount3] = useState(dobs);

    let name;
    let username;
    let dob;

    let handleChangeName = e => {
        name=e.target.value;
    }
    
    const handleChangeUserName = e => {
        username=e.target.value;
    }
    
    const handleChangeDOB = e => {
        dob=e.target.value;
    }
    
    let handleSubmit = (e) => {
        e.preventDefault();
        setCount1(name);
        setCount2(username);
        setCount3(dob);
    }
    return (
        <div className="setting">
            <div><Navbar /></div>
            <h1>Settings</h1>
            <br></br>
            <div className="name_username">
                <h4 className="H4">Name :</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 className="H3" >{count1}</h2><br></br>
                <h4 className="H4">Username : </h4>&nbsp;&nbsp;<h2 className="H3">{count2}</h2><br></br>
                <h4 className="H4">DOB :</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 className="H3">{count3}</h2>
                <h2 className="edit_head">Edit your profile details</h2>
                <form className="form" >
                    <input type="text" placeholder={count1} onChange={handleChangeName}/><br></br>
                    <input type="text" onChange={handleChangeUserName} placeholder={count2} /><br></br>
                    <input type="text" onChange={handleChangeDOB} placeholder={count3} /><br></br><br/>
                    <button onClick={handleSubmit}>Save Changes</button>
                </form>
            </div>
        </div>
    )
}

export default Setting;