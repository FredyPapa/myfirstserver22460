let http = require('http');
let moment = require('moment');
const PORT = 3000;

let app = http.createServer((req,res)=>{
    let hour = moment().format('HH');
    hour = 6;
    let sms = "";
    if(hour>=6 && hour <=12){
        sms = "Buenos días";
    }else if(hour>=13 && hour <=19){
        sms = "Buenas tardes";
    }else{
        sms = "Buenas noches";
    }
    console.log(hour);
    res.end(sms);
    //res.end(`Hola, desde mi primer servidor. Hora: , ${hour}`);
});

app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde http://localhost:${PORT}`);
});