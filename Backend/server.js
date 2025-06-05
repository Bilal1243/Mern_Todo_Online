import express from 'express'
import connectDb from './config/db.js'
import Todos from './model/todoModel.js'

const app = express()

let port = 3000


connectDb()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.method(path , handler)

// req.body

// creating new todo
app.post('/create-todo', async (req, res) => {
    // let title = req.body.title
    // let description = req.body.description
    try {

        let { title, description } = req.body


        let newTodo = await Todos.create({
            title,
            description
        })


        // res.send('success')

        res.json(newTodo)

    } catch (error) {
        console.log(error)
    }

})


// app.post('/register' , (req,res)=>{

// })


app.listen(port, () => console.log('server started'))



// oYfDU5nmDqI4trln