const mongoose = require("mongoose");
require("dotenv").config();

function DbConnection() {
    try {
        mongoose.connect(process.env.DBURL, {}).
            then(i => console.log("db conn done")).
            catch(e => { console.log("err") })
    }
    catch (error) {
        console.log("Error while make connection with db", error)
        process.exit(1)
    }
}

module.exports=DbConnection;