const mongoose = require("mongoose");
require("dotenv").config()
function dbConnection() {
    mongoose.connect(process.env.DBURL,{}).
        then(res => console.log("DataBase connection done")).
        catch(e => console.log("error", e))

}

module.exports = dbConnection;