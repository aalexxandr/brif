import React from 'react'
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {Route, Switch, Redirect} from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { OPENED_REQUESTS } from '../utils/consts'
import { Context } from '../utils/context'
import Loader from './Loader'

const AppRoutes = () => {
    const {auth} = useContext(Context)
    const [user, loading] = useAuthState(auth)

    if (loading){
        return <Loader />
    }

    return user ? 
    (
        <Switch>
             {
                privateRoutes.map( ({path, Component}) => 
                    <Route key={path} path={path} component={Component} exact={true}/>
                )
             }
             <Redirect to={OPENED_REQUESTS}/>
        </Switch>
    )
    :
    (
        <Switch>
             {
                publicRoutes.map( (route) => 
                    <Route key={route.path} path={route.path} component={route.Component} exact={true}/> 
                )
             }
             <Redirect to='/'/>
        </Switch>
    ) 
    
}

export default AppRoutes