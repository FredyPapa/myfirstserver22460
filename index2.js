let express = require("express");
let moment = require("moment");
let app = express();
const PORT = 8080;
let totalVisitas = 0;

app.get("/",(req,res,next)=>{
    //res.send("Mi primer servidor con <b>express</b>");
    totalVisitas++;
    res.send("<p style='color:blue;'>Fredy trabaja como <b><i>Analista Programador de Sistemas</i></b></p>");
});

app.get("/visitas",(req,res,next)=>{
    //res.send("Mi primer servidor con <b>express</b>");
    res.send(`La cantidad de visitas es ${totalVisitas}`);
});

app.get("/fyh",(req,res,next)=>{
    res.json({fyh:moment().format("DD/MM/YYYY HH:MM:SS")});
});

app.listen(PORT, ()=>{
    console.log(`Mi servidor escuchando desde htpp://localhost:${PORT}`);
});