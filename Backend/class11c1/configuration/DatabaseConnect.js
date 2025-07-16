const mongoose = require("mongoose");
require("dotenv").config();
function DatabaseConnect() {
    try {
        mongoose.connect(process.env.DBURL, {}).then(i => console.log("DB Connect")).catch((e) => {
            console.log("Getting an error while connecting with db")
            throw ("Code fat gya")
        })

    }
    catch (error) {
        console.log("getting an error", error)
    }
}

module.exports=DatabaseConnect;