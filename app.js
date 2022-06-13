//new Date()Sin argumentos – crea un objeto Date para la fecha y la hora actuales:

let now = new Date();
alert(now);


//new Date(datestring)
//Si se pasa un único argumento, y es de tipo string, entonces es analizado y convertido a fecha automáticamente

let date = new Date("2022-06-13");
console.log(date);