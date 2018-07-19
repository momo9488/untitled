const express = require('express');

express()
    .all('*',function (req,res,next) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",'3.2.1')
        res.header("Content-Type","application/json;charset=utf-8");
        next();
    })
    .post('/signin',function (req,res) {
        console.log("123")
    })
    .listen(8000,function () {
        console.log('----- server start-----');
    })