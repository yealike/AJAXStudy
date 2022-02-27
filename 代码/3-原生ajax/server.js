//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();

//3.创建路由规则
//request对请求报文的封装
//response对响应报文的封装
app.get("/server",(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader("Access-Control-Allow-Origin",'*');
    //设置响应
    response.send('hello,AJAX');
});

app.post("/server",(request,response)=>{
//允许接收所有请求
// app.all("/server",(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader("Access-Control-Allow-Origin",'*');
    //处理自定义请求头
    response.setHeader('Access-Control-Allow-Header','*')
    //设置响应
    response.send('hello,AJAX POST');
});

//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中。。。。")
})
