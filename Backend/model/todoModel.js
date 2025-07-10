import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    isCompleted : {
        type : Boolean,
        default : false
    }
})


const Todos = mongoose.model('todos' , todoSchema)


export default Todos