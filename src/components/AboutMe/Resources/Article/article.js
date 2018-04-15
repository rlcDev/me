import React from 'react';


export default function (props) {

    let articleCore;

    if (props.hasImage === true) {
        articleCore =
            <div style={articleCoreStyle}>
                <img src={props.image} alt="" style={imageStyle(props.imagePosition)}/>
                <p style={textStyle}>{props.text}</p>
            </div>
    } else {
        articleCore = <p style={textStyle}>{props.text}</p>
    }
    return (
        <div>
            <h2 style={titleSyle}>{props.title}</h2>
            {articleCore}
            <hr />
        </div>
    )
}

const titleSyle = {
    marginLeft: '5%',
}

const textStyle = {
    textIndent : '10px',
    marginLeft: '2%',
    textAlign: 'justify',
    wordWrap: 'break-word'
}

const articleCoreStyle ={
    display : 'inline-block',
    width : '100%',
    height : '100%'
}

const imageStyle = (position)  =>{
    return {
    width : 'auto',
    height : '300px',
    marginLeft: '2%',
    float : position,
    marginRight : '10px'
    }
}