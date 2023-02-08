//1 урок
// const http = require("http"); 
// http.createServer(function(request,response){
     
//     response.end("Hello NodeJS!");
     
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });

//2 Урок
// const os = require("os"); 
// const greeting = require("./greeting");
 
// // получим имя текущего пользователя
// let userName = os.userInfo().username;
 
 
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

//ex 3
// const User = require("./user.js");
 
// let eg = new User("Egor", 19);
// eg.sayHi();

//ex 4

// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice
 
// var greeting2 = require("./greeting.js");
// greeting2.name= "Bob";
 
// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); //Hello Bob

//ex5

// const welcome = require("./welcome");
 
// welcome.getMorningMessage();
// welcome.getEveningMessage();

//ex 6

// const greeting = require("./greeting");
 
// global.name = "Ega";
 
// global.console.log(date);
// console.log(greeting.getMessage());

//ex 7 

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);

