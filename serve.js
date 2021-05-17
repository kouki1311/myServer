const express=require("express");
const app=express();
const port=3000;

//ルーティングの設計
app.get("/",(req,res)=>{
    res.send('Hello World');
    console.log("/ へアクセスがあります。");
});

//httpサーバを起動する
app.listen(port,()=>{
    console.log(`listenig at http://localhost:${port}`);
})