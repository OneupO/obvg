
//ex 8
// // получаем модуль Express
// const express = require("express");
// // создаем приложение
// const app = express();
 
// // устанавливаем обработчик для маршрута "/"
// app.get("/", function(request, response){
 
//     response.end("Hello from Express!");
// });
// // начинаем прослушивание подключений на 3000 порту
// app.listen(3000);


//ex 8
// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];
 
// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("name: " + name);
// console.log("age: " + age);

//ex 9 

// const http = require("http");
 
// let message = "I am Killa!";
// http.createServer(function(request,response){
     
//     console.log(message);
//     response.end(message);
     
// }).listen(3000, "127.0.0.1",()=>{
//     console.log("Сервер начал прослушивание запросов");
// });

//ex 10 
// function display(data, callback){
 
//     // с помощью случайного числа определяем ошибку
//     var randInt = Math.random() * (10 - 1) + 1;
//     var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
     
//     setTimeout(function(){
//         callback(err, data);
//     }, 0);
// }
 
// console.log("Начало работы программы");
 
// display("Обработка данных...", function (err, data){
 
//     if(err) throw err;
//     console.log(data);
// });
 
// console.log("Завершение работы программы");

//ex11 

// function displaySync(callback){
//     callback();
// }
 
// console.log("Начало работы программы");
 
// setTimeout(function(){
         
//         console.log("timeout 500");
// }, 5000);
 
// setTimeout(function(){
         
//         console.log("timeout 100");
// }, 1000);
 
// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");

//ex 12

// const fs = require("fs");
 
// // асинхронное чтение
// fs.readFile("hello.txt", "utf8", 
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if(error) throw error; // если возникла ошибка
//                 console.log(data);  // выводим считанные данные
// });
 
// // синхронное чтение
// console.log("Синхронное чтение файла")
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log(fileContent);

// fs.writeFile("hello.txt", "seltinsweet.com!", function(error){
 
//     if(error) throw error; // если возникла ошибка
//     console.log("Асинхронная запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });

// fs.appendFileSync("hello.txt", "Привет ми ми ми!");
 
// fs.appendFile("hello.txt", "Привет МИД!", function(error){
//     if(error) throw error; // если возникла ошибка
                 
//     console.log("Запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });

	
// fs.unlinkSync("hello.txt") //delete

//ex 13

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// let eventName2 = "bye";
// emitter.on(eventName, function(){
//     console.log("Hello all!");
// });
 
// emitter.on(eventName2, function(){
//     console.log("bye bye!");
// });
 
// emitter.emit(eventName2);

//ex 14

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on(eventName, function(data){
//     console.log(data);
// });
 
// emitter.emit(eventName, "Привет пир!");

//ex 15

// const util = require("util");
// const EventEmitter = require("events");
 
// class User extends EventEmitter{
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }
// util.inherits(User, EventEmitter);
 
// let eventName = "greet";
// User.prototype.sayHi = function(data){
//     this.emit(eventName, data);
// }
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
 
// user.sayHi("Мне нужна твоя одежда...");

//ex 16 

// const http = require("http");
 
// http.createServer(function(request, response){
     
// }).listen(3000);

// const fs = require("fs");
 
// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир!");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("3333");
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// readableStream.on("data", function(chunk){ 
//     console.log(chunk);
// });

//ex 17

// const fs = require("fs");
 
// let readableStream = fs.createReadStream("hello.txt", "utf8");
 
// let writeableStream = fs.createWriteStream("some2.txt");
 
// readableStream.pipe(writeableStream);

//ex 18

// const fs = require("fs");
// const zlib = require("zlib");
  
// let readableStream = fs.createReadStream("hello.txt", "utf8");
  
// let writeableStream = fs.createWriteStream("hello.txt.gz");
  
// let gzip = zlib.createGzip();
  
// readableStream.pipe(gzip).pipe(writeableStream);

//ex 19

// const http = require("http");
 
// http.createServer(function(request, response){
//     response.setHeader("UserId", 12);
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
//     response.write("<h2>hello world</h2>");
//     response.end("Hello world!");
//     console.log("Url: " + request.url);
//     console.log("Тип запроса: " + request.method);
//     console.log("User-Agent: " + request.headers["user-agent"]);
//     console.log("Все заголовки");
//     console.log(request.headers);
    
     
//     response.end();
// }).listen(3000);

// ex 20
// const http = require("http");
  
// http.createServer(function(request, response){
      
//     response.setHeader("Content-Type", "text/html");
//     response.write("<!DOCTYPE html>");
//     response.write("<html>");
//     response.write("<head>");
//     response.write("<title>Hello Node.js</title>");
//     response.write("<meta charset=\"utf-8\" />");
//     response.write("</head>");
//     response.write("<body><h2>Привет миг</h2></body>");
//     response.write("</html>");
//     response.end();
// }).listen(3000);

//ex 21
// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/home" || request.url === "/"){
//         response.write("<h2>Home</h2>");
//     }
//     else if(request.url == "/about"){
//         response.write("<h2>About</h2>");
//     }
//     else if(request.url == "/contact"){
//         response.write("<h2>Contacts</h2>");
//     }
//     else{
//         response.write("<h2>Not found</h2>");
//     }
//     response.end();
// }).listen(3000);

//ex 22 
// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/"){
//         response.statusCode = 302; // временная переадресация
//         // на адрес localhost:3000/newpage
//         response.setHeader("Location", "/newpage");
//     }
//     else if(request.url == "/newpage"){
//         response.write("New address");
//     }
//     else{
//         response.statusCode = 404; // адрес не найден
//         response.write("Not Found");
//     }
//     response.end();
// }).listen(3000);

//ex 23 

// const http = require("http");
// const fs = require("fs");
  
// http.createServer(function(request, response){
      
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     // смотрим, есть ли такой файл
//     fs.access(filePath, fs.constants.R_OK, err => {
//         // если произошла ошибка - отправляем статусный код 404
//         if(err){
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }
//         else{
//             fs.createReadStream(filePath).pipe(response);
//         }
//       });
// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });

//ex 24
// const http = require("http");
// const fs = require("fs");
  
// http.createServer(function(request, response){
      
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function(error, data){
              
//         if(error){
                  
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }   
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });

//ex 25

// const http = require("http");
// const fs = require("fs");
 
// http.createServer((request, response) => {
      
//      if (request.url === "/user") {
         
//         let data = "";
//         request.on("data", chunk => {
//             data += chunk;
//         });
//         request.on("end", () => {
//             console.log(data);
//             response.end("Данные успешно получены");
//         });
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));


//ex 26
// const http = require("http");
// const fs = require("fs");
 
// http.createServer(async (request, response) => {
      
//      if (request.url === "/user") {
         
//         const buffers = []; // буфер для получаемых данных
 
//         for await (const chunk of request) {
//             buffers.push(chunk);        // добавляем в буфер все полученные данные
//         }
 
//         const data = Buffer.concat(buffers).toString();
//         console.log(data);
//         response.end("Данные успешно получены");
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));

//ex 27

// const http = require("http");
// const fs = require("fs");
 
// http.createServer(async (request, response) => {
      
//      if (request.url === "/user") {
         
//         const buffers = []; // буфер для получаемых данных
 
//         for await (const chunk of request) {
//             buffers.push(chunk);        // добавляем в буфер все полученные данные
//         }
 
//         const user = JSON.parse(Buffer.concat(buffers).toString());
//         console.log(user.name,"-", user.age);
//         response.end("Данные успешно получены");
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));

//ex 28 
const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
    fs.readFile("index.html", "utf8", function(error, data){
                 
        let message = "Изучаем Node.js"; 
        let header = "Главная страница";
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data);
    })
}).listen(3000);