// const fs=require("fs");



// // //書き込み
// // fs.writefile("file1.txt",date,(err)=>{
// //     if(err)
// //     {
// //         console.log(`[error]${err}`);
// //     }
// //     console.log("正常に書き込みが完了しました");
// // });
// // console.log("最後まで実行しました");
// try{
//    const date=fs.writeFileSync("file1.txt");
//     console.log(date.toString());
// }
// catch(e)
// {
//     console.log(e.message);
// }
// console.log("最後まで実行しました");
// const fs = require("fs");

// try{
//   const data = fs.readFileSync("file1.txt");
//   console.log(data.toString());
// }
// catch(e){
//   console.log(e.message);
// }

// console.log("最後まで実行しました");

const fs = require("fs");

fs.readFile("file1.txt", (err, data) => {
  if (err){
    console.log(`[error] ${err}`);
  }

  console.log(data.toString());
});

console.log("最後まで実行しました");