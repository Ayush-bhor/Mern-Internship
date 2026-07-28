// const http=require('http');
// const port=2000;

// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html');
//     res.end('<h1>Hello from node js</h1>');

// });



// server.listen(port,()=>{
//     console.log(`Server is running on http://localhost:${port}`);
// });


// const http=require("http");
// const port=3000;

// const server=http.createServer((req,res)=>{
//     res.setHeader("content-type","text/html");
//     res.end("<h1> Hello From Node JS </h1>");
// })

// server.listen(port,()=>{
//     console.log(`Server is listening on port ${port}`);
    
// })
// const http=require("http");
// const port=3000;

// const server=http.createServer((req,res)=>{
//     res.setHeader("content-type","text/html");
//     res.end("<h1> Hello From Node JS </h1>");
// })

// server.listen(port,()=>{
//     console.log(`Server is listening on port ${port}`);
    
// })


const express = require("express")
const mongoose = require("mongoose");

const app = express();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testdb";

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err && err.message ? err.message : err);
        console.error("If you're trying to connect to Atlas, ensure 'MONGO_URI' env var is set, your IP is whitelisted in Atlas Network Access, and the connection string is correct.");
    });


app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(2000,()=>{
    console.log("Server started on port 2000");
})