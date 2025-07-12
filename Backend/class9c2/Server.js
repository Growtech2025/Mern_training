console.log("we are doing fs")
const fs=require("fs");
// console.log(fs.readFileSync("./KhushiIntro.txt","utf-8"));
fs.writeFileSync("./KhushiIntro.txt","I am the good leader \n ")
// fs.appendFileSync("./KhushiIntro.txt","I am the good leader \n")
// fs.appendFileSync("./KhushiIntro.txt","I am the good leader ")
// fs.appendFileSync("./KhushiIntro.txt","I am the good leader ")
// fs.appendFileSync("./KhushiIntro.txt","I am the good leader ")

// fs.unlinkSync("./KhushiIntro.txt")
// fs.mkdirSync("./Harsh/Namo")
// fs.rmdirSync("./Harsh")
console.log(fs.statSync("./KhushiIntro.txt"))