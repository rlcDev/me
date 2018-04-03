import React from 'react';
import './CategoryStyle.css';

export default function Category(props) {

    let categoryComponent;
    if(props.hasLink){
        categoryComponent =  
            <a href={props.link}>
                 <h2 className="titleCategoryStyle" >{props.title}</h2>
             </a>  
    } else {
        categoryComponent = <h2 className="titleCategoryStyle">{props.title}</h2>
    }

    return(categoryComponent);
}