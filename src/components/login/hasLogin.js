
import React from 'react'
const fakeAuth ={
    // isAuthenticated :false,
    isAuthenticated:!!localStorage.getItem('login'),
    authenticate(cb){
        //这里面是判断有没有登陆成功
        this.isAuthenticated =true;
        localStorage.setItem('login',Math.random())
        console.log(localStorage.getItem('login'))
        setTimeout(cb,100)
    },
    singout(cb){
        this.isAuthenticated =false;
        localStorage.setItem('login',Math.random());
        console.log(localStorage.getItem('login'));
        setTimeout(cb,100)
    },
}

export default fakeAuth