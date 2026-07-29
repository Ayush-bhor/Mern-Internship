
const mongoose = require("mongoose")

const databaseConnection=()=>{
    mongoose.connect('mongodb+srv://ayushbhor05_db_user:wLIwgrhQRsHH34wM@cluster0.wcrwlg3.mongodb.net/?appName=Cluster0')
    .then (()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=databaseConnection