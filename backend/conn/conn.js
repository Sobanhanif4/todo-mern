const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose
            .connect("mongodb+srv://dbuser:12345678%40@cluster0.ltk9d.mongodb.net/")
            .then(() => {
                console.log("Connected");
            });
    } catch (error) {
        res.status(400).json({
            message: "Not Connected",
        });
    }
};
conn();