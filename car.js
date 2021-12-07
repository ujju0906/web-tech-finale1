import React from 'react';
import './logsigh.css';
import { Link } from 'react-router-dom';
class Car extends React.Component{
    render(){
        return(<img className = "imagebox" height = "100" width = "100" src = {this.props.pic}></img>)
    }
}
class Name extends React.Component{
    render(){
        return(<div className = "t1"><u>{this.props.name}</u></div>)
    }
}

class Final extends React.Component{
    render(){
        return(<div className = {this.props.class}> 
            <Car pic = {this.props.pic}/>
            <Name name = {this.props.name}/>
        </div>)
    }
}

export default Final;