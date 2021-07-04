import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import { routes } from '../utils/routes'
import Loader from './Loader/Loader'

const AppRoutes = (props) => {
    
    return (
        <Suspense fallback={<Loader/>}>
            <Switch>
                {
                    props.isAuth ? 
                        routes.map( ( {path, Component} ) =>
                            <Route key={path} path={path} render={() => <Component/>} exact={true} />
                        )
                    :
                        routes.filter( route => route.private === false ).map( ( {path, Component} ) => 
                            <Route key={path} path={path} component={Component} exact={true} />
                        )
                }
                <Redirect to='/' />
            </Switch>
        </Suspense>
    )

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(AppRoutes)