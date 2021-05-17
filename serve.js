const express=require("express");
const app=express();
const port=3000;


//ルーティングの設計
app.get("/",(req,res)=>{
   
    res.sendFile(`${__dirname}/index.html`);
    console.log("/ へアクセスがあります。");
});
// ルーティングの設定
// app.get("/", (req, res) =>{
// const date={
//     "message":"Hello World",
//     "date":"2021-05-17"
// }
// res.json(date);
// });
app.get("/image/:file",(req,res)=>{
   const file=req.params.file;

   res.sendFile(`${__dirname}/image/${file}`);
   console.log(`/image/${file}へアクセスがありました。`);
});

//httpサーバを起動する
app.listen(port,()=>{
    console.log(`listenig at http://localhost:${port}`);
})