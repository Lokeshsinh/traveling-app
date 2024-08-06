const {Schema, default: mongoose} =  require("mongoose");

const TaskSchema = new Schema({
    location:{
        type:String,
        required: true,
    },
    members:{
        type:String,
        required: true
    },
    start:{
        type: String,
        required:true,
    },
    end:{
        type: String,
        required: true
    }
})
const Collection =  mongoose.model("travel-starts", TaskSchema);

module.exports = {Collection};