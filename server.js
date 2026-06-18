import express from 'express'
import colors from 'colors'
const app = express()
const PORT = 1500

app.use(express.json())

app.use('/welcome',(req,res,next)=>{
    console.log("Start")
    res.on('finish', ()=>{
        console.log("End")
    })
    next()
})
// route
app.get('/',(req,res)=>{
    res.send('Hello Everyone')
    console.log('Middle')
})
app.get('/welcome',(req,res)=>{
    res.send('Welcome')
    console.log('Middle')
})

// app.get('/about', (req,res)=>{
//     res.send('This is a About page')
// })

// app.get('/user/:username', (req,res)=>{
//     const username =  req.params.username
//     res.send(`Welcome ${username}`)
// })
// // /search?keyword=express
// app.get('/search', (req,res)=>{
//     const keyword = req.query.keyword
//     res.send(`Searching for ${keyword}`)
// })

app.post('/user' ,(req,res)=>{
    const {name , email} = req.body
    res.json({
        message : `User ${name} or email ${email} created successfully..`
    })
})
app.put('/user/:id', (req,res)=>{
    const userId = req.params.id
    const {name , email} = req.body
    res.json({
        message : `User ${userId} updated to ${name}, ${email}`
    })
})

app.delete('/user/:id', (req,res)=>{
    const userId = req.params.id
    res.json({
        message : `User deleted with this ${userId}`
    })
})
app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`.bgBlue)
})


// templating
// serve staic files
// mongodb connectivity
// CRUD
// minor project - MERN - 4 / 4 = 8 