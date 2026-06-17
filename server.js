import express from 'express'
import colors from 'colors'
const app = express()
const PORT = 1500
// route
app.get('/',(req,res)=>{
    res.send('Hello Everyone')
})

app.get('/about', (req,res)=>{
    res.send('This is a About page')
})

app.get('/user/:username', (req,res)=>{
    const username =  req.params.username
    res.send(`Welcome ${username}`)
})
// /search?keyword=express
app.get('/search', (req,res)=>{
    const keyword = req.query.keyword
    res.send(`Searching for ${keyword}`)
})

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`.bgBlue)
})
