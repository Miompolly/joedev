const express=require('express');

//express app
const app=express();

///register view engine
app.set('view engine','ejs');
//listen for request
app.listen(5000);


app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/portfolio',(req,res)=>{
    res.render('portfolio');
});
app.get('/pricing',(req,res)=>{
    res.render('pricing');
});
app.get('/service',(req,res)=>{
    res.render('service');
});
app.get('/review',(req,res)=>{
    res.render('review');
});