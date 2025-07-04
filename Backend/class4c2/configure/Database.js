const mongoose = require("mongoose");
require("dotenv").config();
function dbConnection() {
    try {
        mongoose.connect(process.env.DBURL,{}).then(ip => console.log("Db connected successfully")).
            catch((error) => {
                console.log("Error while connecting with db");
                throw ("failed due to some network issue ")
            })
    }
    catch (error) {
        console.log("Database connection failed")
    }
}
module.exports=dbConnection;