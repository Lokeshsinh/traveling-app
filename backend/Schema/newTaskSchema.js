const {Schema, default: mongoose} =  require("mongoose");

const newTaskSchema  =   new Schema({
    username:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})
const Comments  =  mongoose.model("comment", newTaskSchema)

module.exports = {Comments}