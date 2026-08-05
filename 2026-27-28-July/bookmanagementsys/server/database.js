
const mongoose = require("mongoose")

const databaseConnection=()=>{
    mongoose.connect('mongodb://ayushbhor05_db_user:wLIwgrhQRsHH34wM@ac-zieh2aq-shard-00-00.wcrwlg3.mongodb.net:27017,ac-zieh2aq-shard-00-01.wcrwlg3.mongodb.net:27017,ac-zieh2aq-shard-00-02.wcrwlg3.mongodb.net:27017/?ssl=true&replicaSet=atlas-b6ocqk-shard-0&authSource=admin&appName=Cluster0')
    .then (()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=databaseConnection