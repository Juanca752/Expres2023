var express = require('express');
var app= express();

app.get('/',function(req,res){
    res.send('Una API basica desdes express');
});

app.get('/saludo',function(req,res){
    res.send('Hola desde la API');
});

app.get('/despedida',function(req,res){
    res.send('Adios desdes una API');
});

app.listen(3000,function(){
    console.log('Aplicacion ejemplo,escuchamos el puerto 3000 !');
});