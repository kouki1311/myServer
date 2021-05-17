const express=require("express");
const app=express();
const port=3000;


//ルーティングの設計
app.get("/",(req,res)=>{
   
    res.sendFile(`${__dirname}/index1.html`);
    console.log("/ へアクセスがあります。");
});

app.get("/JavaScripts/:file", (req, res) =>{
    const file = req.params.file;
  
    res.sendFile(`${__dirname}/JavaScripts/${file}`);
    console.log(`/JavaScripts/${file} へアクセスがありました2`);
  });


  app.get("/StyleSheets/:file", (req, res) =>{
    const file = req.params.file;
  
    res.sendFile(`${__dirname}/StyleSheets/${file}`);
    console.log(`/StyleSheets/${file} へアクセスがありました4`);
  });
  app.get("/Imgs/:file", (req, res) =>{
    const file = req.params.file;
  
    res.sendFile(`${__dirname}/Imgs/${file}`);
    console.log(`/Imgs/${file} へアクセスがありました5`);
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
   console.log(`/image/${file}へアクセスがありました。1`);
});


//httpサーバを起動する
app.listen(port,()=>{
    console.log(`listenig at http://localhost:${port}`);
})