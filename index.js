require("./src/db/conn");
const Student = require("./src/models/models");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

const templatepath = path.join(__dirname,"./templates/views");
const partialspath = path.join(__dirname,"./templates/partials");

app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);

router.get("/",(req,res)=>{
    res.render("index");
});

app.use('/.netlify/functions/api',router);
router.post("/data",async(req,res)=>{
    try{
        var name = req.body.name;
        var email = req.body.email;
        var city = req.body.city;
        var state = req.body.state;
        var phone = req.body.phone;
        var password = req.body.password;

        const data = new Student({
            name:name,
            email:email,
            city:city,
            state:state,
            phone:phone,
            password:password,
        });
        const respone = await data.save();
        console.log(respone);
        res.render("index");
    }catch(error){
        console.log(error);
    }
});

router.get("/show",(req,res)=>{
    const display = async() =>{
        const data = await Student.find();
        res.render("showdata",{data:data});
    }
    display();
});

// app.listen(port,()=>{
//     console.log(`Server Started http://localhost:${port}/`);
// });

module.exports = app;
module.exports = serverless(app);