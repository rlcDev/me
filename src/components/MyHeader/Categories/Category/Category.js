import React from 'react';
import './CategoryStyle.css';

export default function Category(props) {
    return (
        <a href={props.link} className="LinkStyle">
            <p className="titleCategoryStyle" >{props.title}</p>
        </a>)
}