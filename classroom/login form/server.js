const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
const users = [];

app.post('/register', (req, res) => {
    // create new account
    const user = req.body;

    if (!user.password || !user.username) {
        res.send("Username and password are required");
        return;
    }

    if (user.password.length < 4) {
        res.send("password is short");
        return;
    }

    // console.log(user);
    users.push(user);
    console.log(users);
    res.send("registered successfully!!!");
})
app.post('/login', (req, res) => {
    // create new account
    const loginData = req.body;
    const loginUser = users.find(u=> u.username == loginData.username);   //jo bhi array me added user hai usme se login krne wale ka username or pass match krna hai simpleee

    if(!loginUser){
        res.send("no such account");
        return;
    }
    if(loginUser.password != loginData.password){
        res.send("incorrect password");
        return;
    }
    console.log("boom");
    res.send("login successfull");
})

app.get('/accounts', (req, res) => {
    const { n, sort } = req.query;
    console.log(n, sort);
    let accounts = users.map((user) => user.username);

    if (sort) {
        accounts = accounts.sort();
    }
    if (n) {
        accounts = accounts.splice(0,n);
    }

    res.send(accounts);
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
})

// app.get('/api',(req,res)=>{
//     console.log(req.query);
//     const {page} = req.query;
//     res.send(`${page} is showing`);
// })
// const students=[1,2,3,4,5];

// app.get('/saloni',(req,res)=> {
//     const {idx}=req.query;
//     console.log(students[idx]);
//     res.send('juj');
// })

app.listen(3000, () => console.log("runingg!!"));
