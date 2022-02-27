//1.引入express
const express = require('express');
const {request, response} = require("express");
//2.创建应用对象
const app = express();

//3.创建路由规则
//request对请求报文的封装
//response对响应报文的封装
app.get("/server", (request, response) => {
    //设置响应头,设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", '*');
    //设置响应
    response.send('hello,AJAX');
});

app.post("/server", (request, response) => {
//允许接收所有请求
// app.all("/server",(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", '*');
    //处理自定义请求头
    response.setHeader('Access-Control-Allow-Header', '*')
    //设置响应
    response.send('hello,AJAX POST');
});

app.all("/json-server", (request, response) => {
//允许接收所有请求

    //设置响应头,设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", '*');
    //处理自定义请求头
    response.setHeader('Access-Control-Allow-Header', '*')
    //响应一个数据
    const data = {
        name: 'yealike666',
        age: 21
    }
    //对对象进行字符转换
    let str = JSON.stringify(data)
    //设置响应,响应体只能响应字符串和buffer,如果要响应一个对象，需要先对对象进行一个json转换
    response.send(str);
});


//针对IE缓存
app.get("/ie", (request, response) => {

    response.setHeader("Access-Control-Allow-Origin", '*');
    response.send('hello,AJAX-IE-你好啊');
});

//超时与网络异常
app.get("/delay", (request, response) => {

    response.setHeader("Access-Control-Allow-Origin", '*');

    setTimeout(()=>{
        response.send('延时响应');
    },3000)

});

app.all('/jquery-server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", '*');
    const info = {
        name: '小叶',
        age: 21
    }
    // response.send('hello Jquery AJAX');
    response.send(JSON.stringify(info))//其实不用转换返回的也是json数据格式
})


//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中。。。。")
})
