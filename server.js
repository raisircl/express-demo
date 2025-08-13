const express=require('express');

const app=express();
const PORT =3500;

//static files middleware 
app.use(express.static('public'));

//Body Parser Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/contact',(req,res)=>{
 const { name, email, message } = req.body;
 res.send(`Thanks ${name}, we received your message: "${message}"`);

});

app.get('/',(req,res)=>{
    res.sendFile('index.html');
});
app.get('/contact',(req,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
</head>
<body>
    <form action="/contact" method="POST">
    <input type="text" name="name" placeholder="Your Name">
    <input type="email" name="email" placeholder="Your Email">
    <textarea name="message" placeholder="Your Message"></textarea>
    <button type="submit">Send</button>
</form>

</body>`);
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
   const{uname,age}=user;
    //res.json(user);
    res.send(`Hello I am ${uname} and I am ${age} year old.`);
});
app.get('/search',(req,res)=>{
    const q=req.query.q;
    res.send(`You are searching for ${q}`);
});
app.get('/blog/:id/:top', (req, res) => {
    res.send(`You are looking for top ${req.params.top} blogs of ${req.params.id}`);
});

app.listen(PORT,()=>{
    console.log(`PORT listen at http://localhost:${PORT}`);
});
