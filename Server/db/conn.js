const mongoose = require("mongoose");
const password = encodeURIComponent("t9wDbsJnrcgajgf3");
const uri = "mongodb+srv://RizqBchao:" + password + "@cluster0.jzfipqq.mongodb.net/RizqBchao?retryWrites=true&w=majority";

async function dbConnect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connection established")

    } catch (error) {
        console.log("db error", error)

    }

}
module.exports = dbConnect;