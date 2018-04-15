import React, { Component } from 'react';
import Categories from './Categories/Categories';

class MyHeader extends Component {

    render() {
        return (
                <div style={divStyle}>
                    <p style={nameStyle}>@rlcdev</p>
                    <Categories />
                </div>
        );
    }
}

const divStyle = {
    minWidth: '400px',
    padding :'0px',
    margin : '0px',
    position : 'fixed',
    top:'0px',
    width: '100%',
    height: '60px',
    textAlign: 'right',
    backgroundColor: '#084651',
    zIndex : '99',
}

const nameStyle = {
    color : 'white',
    float: 'left',
    fontWeight: 'lighter',
    fontSize: '22px', 
    cursor : 'pointer'

}

export default MyHeader;