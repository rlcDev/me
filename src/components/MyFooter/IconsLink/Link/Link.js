import React from 'react';

export default function Link(props) {

    return(
        <div style= {LinkStyleParent}>
            <a href = {props.link}>
            <i class={props.icon} style={IconStyle}/>
            </a>
        </div>      
    );

}

const LinkStyleParent = {
    display : 'inline-block',
    padding : '0px',
    marginRight : '10px'

}

const IconStyle =  {
    marginTop : '2px',
    height : '100%',
    width : '30px',
    color : 'white'
}