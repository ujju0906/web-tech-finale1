import React from 'react';
import { Link } from 'react-router-dom';
import './cardetails.css';
class Canvas extends React.Component{
    render(){
        return(<img id = "can" width="500" height="250"  src = {this.props.pic}></img>)
    }
}
class Cardet extends React.Component{
    render(){

        return(<div>
        <h1 class = "t1">{this.props.name}</h1>
        <Canvas pic = {this.props.pic} />
        <article>
            <section>
            <p><b>Features : </b></p>
            
            <p>Horsepower : {this.props.horsepower} </p>
            
            <p>Engine : {this.props.engine}</p>
            <p>{this.props.drive}</p>
            </section>


        </article>
        <div class = "right" >
            <div class = "box">Current bid : 92 L</div><br />
            <div class = "box2">Place your bid :
            <input type = "text"></input></div><br />
            <div class = "box">Time remaining : 24 hrs </div>
        </div>



    

      
    

        </div>)
    }
}
export default Cardet;
 