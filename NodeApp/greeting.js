
//ex 2
// let currentDate = new Date();
// module.exports.date = currentDate;
 
// module.exports.getMessage = function(name){
//     let hour = currentDate.getHours();
//     if(hour > 16)
//         return "Добрый вечер, " + name;
//     else if(hour > 10)
//         return "Добрый день, " + name;
//     else
//         return "Доброе утро, " + name;
// }

//ex4 
// module.exports.name = "Alice";

let currentDate = new Date();
 
global.date = currentDate;
 
module.exports.getMessage = function(){
    let hour = currentDate.getHours();
    if(hour >16)
        return "Добрый вечер, " + global.name;
    else if(hour >10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
}