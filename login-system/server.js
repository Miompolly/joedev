const express=require("express");
const app=express();
const port=process.env.PORT||5000;

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public/assets'));



app.set('view engine','ejs');

//HOME ROUTE


app.get('/',(req,res)=>{
    res.render('index',{title:"Login System"});
})

app.listen(port,()=>{
    console.log("Listening to the server on http://localhost:5000");
})