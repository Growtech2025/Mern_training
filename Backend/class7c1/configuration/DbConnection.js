const mongoose = require("mongoose");
require("dotenv").config()
function DbConnection() {
    try {
        mongoose.connect(process.env.DBURL, {}).
            then(() => console.log("DB Conncetion done")).catch(e => {
                console.log("Error occuered")
            })

    }
    catch (error) {
        console.log("Database connection failed")
        process.exit(1);
    }
}
module.exports = DbConnection;