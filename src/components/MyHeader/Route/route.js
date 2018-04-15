import React from 'react'
import { CategoriesData } from '../Categories/CategoriesData'
import { Route } from 'react-router-dom'

export function routes() {
    return (
        CategoriesData.map((elt) => {
            let route ;
            if(elt.title === ""){
                route = <Route exact path={elt.path} component={elt.component} />
            } else {
                route = <Route path={elt.path} component={elt.component} />
            }
            return (route)
        })
    )
}