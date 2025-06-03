import express from 'express'
import connectDb from './config/db.js'

const app = express()

let port = 3000


connectDb()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.method(path , handler)

app.get('/', (req, res) => {
    res.send('hai worked')
})

app.get('/user', (req, res) => {
    res.send('user response')
})


// app.post('/register' , (req,res)=>{

// })


app.listen(port, () => console.log('server started'))



// oYfDU5nmDqI4trln