var express = require('express');
var app= express();

app.get('/',function(req,res){
    res.send('Hola mundo !');
});

app.listen(3000,function(){
    console.log('Aplicacion ejemplo,escuchamos el puerto 3000 !');
});