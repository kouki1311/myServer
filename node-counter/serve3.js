// const fs=require("fs");
// const express=require("express");

// const app=express();
// const port=3000;
// const file="data.txt";

// //ルーティング
// app.get("/",(req,res)=>{
//     try{
//         let count=fs.readFileSync(file);
//         fs.writeFileSync(file,(Number(count+1)));
//         res.send(`あなたは${count}人目のお客様`);
//     }
//     catch(e)
//     {
//         res.send(`エラーが発生しました${e.message}`);
//     }
// });

// //サーバーを起動
// app.listen(port,()=>{
//     console.log(`Running at http://localhost:${port}/`);
// });

// const fs = require("fs");
// const express = require("express");
// const app  = express();
// const port = 3000;
// const file = "data.txt";

// //------------------------
// // ルーティング
// //------------------------
// app.get("/", (req, res)=>{
//   //------------------------
//   // 読み込み
//   //------------------------
//   fs.readFile(file, (err, data)=>{
//     const count = Number(data);

//     if( err ){
//       res.send(`エラーが発生しました ${err}`);
//       return(false);
//     }

//     //------------------------
//     // 書き込み
//     //------------------------
//     fs.writeFile(file, count+1, (err)=>{
//       if( err ){
//         res.send(`エラーが発生しました ${err}`);
//         return(false);
//       }

//       res.send(`あなたは${count}人目のお客様です`);
//     })

//   });
// });

// // サーバを起動
// app.listen(port, ()=>{
//   console.log(`Running at http://localhost:${port}/`);
// });

const fs = require("fs");

const stream = fs.createWriteStream("file3.txt");
stream.cork();  // ファイルに書き込まずバッファリングする

//---------------------------------
// 3秒置きにStreamに出力
//---------------------------------
let count = 100;
let timer = setInterval( () => {
  // バッファに出力
  stream.write(`${count}\n`);
  console.log(count);

  // 3回に1回ファイルに出力
  if( (count % 300) === 0){
    stream.uncork();    // ファイルへ出力する
    stream.cork();      // 再度バッファリングする
    console.log("-- uncork()");
  }

  // 10回目でタイマー終了
  if( count >= 1000 ){
    stream.end("\n");     //ここでもファイルへ出力される
    clearInterval(timer);
    console.log("-- end()");
  }

  // カウンターを加算
  count += 100;
}, 1000);

stream.on("error", (err)=>{
  if(err)
    console.log(err.message);
});