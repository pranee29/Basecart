

const express=require("express");
const bodyParser=require("body-parser");
const connectDB=require("./dbConfig");
const mobileRoute = require("./Router/mobileroute");
const cors = require('cors')

const app = express();
const port = 3002;
connectDB();
app.use(express.json());
app.use(cors());



//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.use("/a",mobileRoute);