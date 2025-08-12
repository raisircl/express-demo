const express=require('express');

const app=express();
const PORT =3500;


app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
});
app.get('/about',(req,res)=>{
    console.log(req);
    res.send("Welcome to Express JS About Page");
});
app.get('/api/user',(req,res)=>{
    const user={
        uname:"Ram",
        age:20
    };
   
    res.json(user);
});
app.listen(PORT,()=>{
    console.log(`PORT listen at http://localhost:${PORT}`);
});
