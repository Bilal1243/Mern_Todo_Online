import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connected = await mongoose.connect('mongodb+srv://muhammedbilal6211:oYfDU5nmDqI4trln@cluster0.atxrh5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('mongodb connected successfully')
    } catch (error) {
        console.log(error)
    }
}

export default connectDb