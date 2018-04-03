import React, { Component } from 'react';
import Categories from './Categories/Categories';

class MyHeader extends Component {

render(){
    return(
        <div style={divStyle}>
        <Categories/>
        </div>      
    );
}
}

const divStyle = {
    width : '100%',
    height : '60px',
    textAlign : 'right',
    backgroundColor : '#536a7a'
}



export default MyHeader;