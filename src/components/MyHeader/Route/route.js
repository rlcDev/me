import React from 'react'
import {CategoriesData} from '../Categories/CatagoriesData'
import {Route} from 'react-router-dom'

export function routes(){
    return (
        CategoriesData.map(  (elt)=> {
        return(<Route path={elt.path} component={elt.component}/>)
    })
    )
}