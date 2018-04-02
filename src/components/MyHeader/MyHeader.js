import React, { Component } from 'react';

class MyHeader extends Component {

render(){
    return(
        <div style={divStyle}>
        <h2 style={titleStyle}>@rlcdev</h2>
        
        {/*handle this properly */}
        <a href="http://public.rlcdev.fr">
        <h2 style={titleCategory} >projects</h2>
        </a>
        {/*handle this properly */}
        
        </div>      
    );
}
}


const titleCategory = {
    position : 'fixed', 
    right : '5px',
    display : 'inline-block',
    color : 'white',
    verticalAlign : 'middle',
    transform : 'translate(0%,-25%)'   
}

const divStyle = {
    width : '100%',
    height : '60px',
    position : 'absolute',
    backgroundColor : '#536a7a'
}

const titleStyle = {
    display : 'inline-block',
    color : 'white',
    verticalAlign : 'middle',
    transform : 'translate(0%,-25%)'
}

export default MyHeader;