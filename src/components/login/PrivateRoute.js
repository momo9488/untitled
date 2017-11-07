import {Route,Redirect} from 'react-router'
import React from 'react'
import fakeAuth from './hasLogin'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated  ? (
        // localStorage.getItem('login') ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )

    )}/>
)
{console.log(localStorage.getItem('login'))}
export {PrivateRoute}