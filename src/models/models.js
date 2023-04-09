const mongoose = require("mongoose");

const tableschema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
        trim:true,
    },
    city:{
        type:String,
        require:true,
        trim:true,
    },
    state:{
        type:String,
        require:true,
        trim:true,
    },
    phone:{
        type:String,
        require:true,
        trim:true,
    },
});

const Student = new mongoose.model("Students",tableschema);

module.exports = Student;