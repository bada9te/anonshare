const http = require("http");
const APP = require("./app");
const connectMongo = require("./utils/connectMongo");
require("dotenv").config();


const SERVER = http.createServer(APP);

async function exec() {
    await connectMongo(process.env.MONGO_URL);

    SERVER.listen(8000, () => {
        console.log("Server is running...");
    });
}

exec();