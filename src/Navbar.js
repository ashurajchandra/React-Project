// @flow 
import * as React from 'react';
import './App.css';

function  Navbar (props){
    return (
        <div className="navbar">
          

           
                <h3>Logo </h3>
               <div id="nav-items">
               <span >Home</span> 
                <span >My Portfolio</span> 
                <span>Get In Touch</span> 
                <span>About</span>
               </div>
         
        </div>
    );
};
export default Navbar;