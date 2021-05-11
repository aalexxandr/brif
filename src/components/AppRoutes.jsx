import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { routes } from '../utils/routes'


const AppRoutes = () => {

    return (
        <Switch>
             {
                routes.map( ({path, Component}) => 
                    <Route key={path} path={path} component={Component} exact={true} />
                )
             }
             <Redirect to='/' />
        </Switch>
    )

}

export default AppRoutes