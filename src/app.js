const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");

const app = express();

app.use("/admin", adminAuth);

app.get("/admin/getAdmin", (req, res) => {
    res.send("Admin Data Sent")
});


app.get("/user", userAuth, (req, res) => {
    res.send("user Data Sent")
});

app.listen(3000, ()=> {
    console.log("server is running");
});



