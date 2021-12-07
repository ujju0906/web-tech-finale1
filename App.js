import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Final from './car';
import './logsigh.css';

import Login from './Logsign';
import Signup from './L2';
import NotFoundPage from './notfound';

function App() {
  return(
    <div style = {{paddingBottom:20,margin:0}}>
    <div className = "x1">
   <h1>Welcome to the home Page</h1>
   
   <div id = "sign">
   
   
   <Link to = "/login"><button>login </button></Link>

   
   <Link to = "/signup"><button>signup</button></Link>
   </div>


   </div>
   <div style = {{position:'relative',right : 400}}>
   <Link to ="/Rolls"><Final class = "roll" pic = "./roll.jpeg" name = "Red Rolls Royce" l = 'Rolls'/></Link>
   <Link to ="/Bugatti"><Final class= "bugatti" pic = "./bugatti.jpeg" name = "Buggati Chiron"/></Link>
   <Link to ="/Ghost"><Final class= "ghost" pic = "./pic.jpeg" name = "Rolls royce ghost"/></Link>
   </div>
   <div style = {{position:'relative',right : 400}}>
   <Link to ="/Ferrari"><Final class= "ferrari" pic = "./ferrari.jpeg" name = "La Ferrari"/></Link>
   <Link to ="/Lambo"><Final class= "lambo" pic = "./lambo.jpg" name = "Lamborghini"/></Link>
   <Link to ="/Mustang"><Final class= "mustang" pic = "./mustang.jpg" name = "Mustang"/></Link>
   </div>
   </div>
  );
}

export default App;