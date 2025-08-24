const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");


app.post("/signup", async (req, res) => {
   
    const user = new User({
        firstName: "Virat",
        lastName: "Kholi",
        emailId: "virat@knoli.in",
        password: "test323$"
    });
    
    try {
        await user.save();
        res.send("User added successfully");
    } catch (error) {
        res.status(400).send("User added successfully" + err.message);
    }

    
    

});

connectDB()
    .then(() => {
        console.log("Database connection established");
        app.listen(3000, ()=> {
            console.log("server is running");
        });
    })
    .catch((err) => {
        console.error("Database connection failed", err);
    });







