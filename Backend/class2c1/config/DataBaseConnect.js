const mongoose = require("mongoose");
require("dotenv").config();
function DataBaseConnection() {
    try {
        mongoose.connect(process.env.DataBase_URL,{}).then(() => {
            console.log("Database conncetion has stabilished ")
        }).catch((error) => {
            console.log("Database connection failed, due to", error)
        })
    }

    catch (error) {
        console.log("We are getting an error", error)
    }
}
module.exports = DataBaseConnection;