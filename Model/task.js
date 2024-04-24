import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim : true
    },
    compeleted: {
        type: Boolean,
        default : false
    }
})

export default mongoose.model("Task",taskSchema)