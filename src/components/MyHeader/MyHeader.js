import React, { Component } from 'react';
import Categories from './Categories/Categories';

class MyHeader extends Component {

    render() {
        return (
                <div style={divStyle}>
                    <Categories />
                </div>
        );
    }
}

const divStyle = {
    padding :'0px',
    margin : '0px',
    position : 'fixed',
    top:'0px',
    width: '100%',
    height: '60px',
    textAlign: 'right',
    backgroundColor: '#084651',
    zIndex : '99'
}



export default MyHeader;