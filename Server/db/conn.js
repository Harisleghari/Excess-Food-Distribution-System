const mongoose = require("mongoose");
// const password = encodeURIComponent("t9wDbsJnrcgajgf3");
// const uri = "mongodb+srv://RizqBchao:" + password + "@cluster0.jzfipqq.mongodb.net/RizqBchao?retryWrites=true&w=majority";
// const uri = "mongodb://RizqBchao:" + password + "@ac-sm6fd0k-shard-00-00.jzfipqq.mongodb.net:27017,ac-sm6fd0k-shard-00-01.jzfipqq.mongodb.net:27017,ac-sm6fd0k-shard-00-02.jzfipqq.mongodb.net:27017/?replicaSet=atlas-59t2qq-shard-0&ssl=true&authSource=admin";
const uri = `mongodb://harisleghari61:${process.env.DB_PASS}@ac-hlniqfp-shard-00-00.2aqmcw5.mongodb.net:27017,ac-hlniqfp-shard-00-01.2aqmcw5.mongodb.net:27017,ac-hlniqfp-shard-00-02.2aqmcw5.mongodb.net:27017/?ssl=true&replicaSet=atlas-zlinj8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=EFDSDB`


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