const express=require("express");
const app=express();
const port=3000;

//カウンター用のデータ
let count=1;

//ルーティング
app.get("/",(req,res)=>{
    res.send(`あなたは${count}人目のお客様です。`);
    count;
});

app.get("/reset",(req,res)=>{
    res.send('カウントをリセットしました');
    count=1;
});
//サーバを起動
app.listen(port,()=>{
    console.log(`Running at http://localhost:${port}/`);
})
