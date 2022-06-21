const express = require('express');
const path = require ('path')
const app = express ();
const port = 3030

app.use(express.static('public'));

/*RUTAS*/
app.get('/', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'index.html')))
app.get('/babbage', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'babbage.html')))
app.get('/berners-lee', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'berners-lee.html')))
app.get('/clarke', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'clarke.html')))
app.get('/hamilton', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'hamilton.html')))
app.get('/hopper', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'hopper.html')))
app.get('/lovelace', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'lovelace.html')))
app.get('/turing', (req,res)=> res.sendfile(path.join(__dirname, 'view', 'turing.html')))


app.listen(port, ()=> console.log('Server runing in http://localhost:' + port))


/* -> Debe direccionar al recurso index.html. 
●/babbage -> Debe direccionar al recurso babbage.html 
●/berners-lee -> Debe direccionar al recurso berners-lee.html. 
●/clarke -> Debe direccionar al recurso clarke.html. 
●/hamilton -> Debe direccionar al recurso hamilton.html. 
●/hopper -> Debe direccionar al recurso hopper.html. 
●/lovelace -> Debe direccionar al recurso lovelace.html. 
/turing-> Debe direccionar al recurso turing.html */