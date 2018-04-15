import React from 'react';
import './CategoryStyle.css';
import { Link } from 'react-router-dom';

export default function Category(props) {

    let categoryComponent;
    if (props.hasLink) {
        categoryComponent =
            <a href={props.link} className="LinkStyle">
                <p className="titleCategoryStyle" >{props.title}</p>
            </a>
    } else {
        categoryComponent =
            <Link className="titleCategoryStyle" to={props.path}>{props.title}</Link>

    }
    return (categoryComponent);
}