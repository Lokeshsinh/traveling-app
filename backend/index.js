require("dotenv").config();
const  express  =  require("express");
const bodyParser = require("body-parser");
const cors  =  require("cors");
const mongoose =  require("mongoose");

const app =  express();
app.use(bodyParser.json());
app.use(cors());
const PROT = 3004;
const DB_URL = process.env.MONGODB_URL;

app.get('/', (req,res) => {
    res.send("hello server")
})

const travel =  require('./Server')
app.use("/travel", travel)

const comment =  require('./Commet');
app.use("/comment", comment)


app.listen(PROT,() => {
    console.log(`server running from http://localhost:${PROT}`);
    mongoose.connect(DB_URL)
    console.log("mongoose connected");
})