const mongoose = require("mongoose");

const databaseConnection = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://ayushbhor05_db_user:wLIwgrhQRsHH34wM@cluster0.wcrwlg3.mongodb.net/?appName=Cluster0"
        );

        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed");
        console.log(error);
    }
};

module.exports = databaseConnection;