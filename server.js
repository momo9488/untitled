const express = require('express');
const body = require('body-parser')//中间件---利用中间件来获取请求的入参信息
const fs = require('fs');//文件读写模块---对json进行重写
express()
    .all('*',function (req,res,next) {
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Headers","X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",'3.2.1')
        res.header("Content-Type","application/json;charset=utf-8");
        next();
    })
    .use(body.urlencoded({ extended: false })) ///中间件
    .post('/signin',function (req,res) {
        fs.readFile('./public/DB/address3.json','utf-8',function (err,data) {
            if(!err){
                let jsonData = [];
                if(data !==""){
                    jsonData = JSON.parse(data)
                    fs.writeFile('./public/DB/address3.json',JSON.stringify(jsonData),function (err) {
                        if(!err){
                            res.send({
                                info:"注册成功",
                                data:jsonData
                            })
                        }else{
                            res.send({
                                info:"系统出错"
                            })
                        }
                    })
                }else{
                    res.send({
                        info:"系统出错"
                    })
                }
            }else{
                res.send({
                    info:"信息有误"
                })
            }
        })
    })
    .listen(3001,function () {
        console.log('----- server start localhost:3001-----');
    })