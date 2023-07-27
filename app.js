const express = require("express");

const app = express();

const port = 2000;

const mongoose = require('mongoose');

mongoose.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error",(error)=>console.log(error));
db.once("open",()=> console.log("connected"));


app.set('view engine','ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

var expresslayout = require('express-ejs-layouts');
app.use(expresslayout);
app.set('layout','layouts/layout');

const studentRoute = require("./routes/student")
const teacherRoute = require("./routes/teacher")
app.use("/student",studentRoute);
app.use("/teacher",teacherRoute);


app.get("/",(req,res) => {
    res.render("index");
});

app.listen(port,() =>{
    console.log(`App listening at http://localhost:${port}`);
});

app.use((req,res)=>{
    res.status(404).render('error',{title:'404'});
});

