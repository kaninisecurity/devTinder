const mongoose = require("mongoose");


const connectDB = async() => {
    await mongoose.connect(
    "mongodb+srv://namasthedev:ct7Y5pU8fU2HSK5@cluster0.olyugd7.mongodb.net/HelloWorld"
    );
};

module.exports = connectDB;


