import React from "react";
import data from './posts.json';
import Section from "./Section";
import { Navbar } from "./Navbar";

const Home = ()=>{
    return (
        <div>
        <Navbar />
        <h1 className='home_feed'>Home Feed</h1> 
        {Object.keys(data).map((item) => (<Section user={item} obj={data} />))}
        </div>
      
    )
}

export default Home;