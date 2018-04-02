import React, { Component } from 'react';
import Links from './IconsLink/Links'


class MyFooter extends Component {

render(){
    return(
        <div style={BandStyle}>
        <Links/>
        <p style={CopyrightStyle}>Copyright© rlcdev</p>
        </div>      
    );
}
}

const CopyrightStyle ={
    padding : '0px',
    margin : '0px',
    position : 'fixed',
    left : '0px',
    bottom : '0px',
    color : 'white',
    fontSize : '10px'
}

const BandStyle = {
    position : 'fixed',
    bottom : '0px',
    width : '100%',
    height : '40px',
    backgroundColor : '#536a7a',
    textAlign : 'center',

}

export default MyFooter;