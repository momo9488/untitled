import React from 'react'
import fakeAuth from './hasLogin'
import {withRouter} from 'react-router-dom'
const AuthButton = withRouter(({history})=>{
    let lon=fakeAuth.isAuthenticated  ? (
    // let lon=localStorage.getItem('login') ? (
        <div>
            <p>welcome <button onClick={()=>{
                fakeAuth.singout(()=>{
                    history.push('/')
                })
            }}>sign out</button></p>
        </div>
    ):(
        <div>
            <p>你没有登陆</p>
        </div>
    )
    return lon
});
export {AuthButton}