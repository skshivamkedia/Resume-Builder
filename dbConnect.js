const mongoose = require('mongoose')

const URL = 'mongodb+srv://skshivamkedia:sk%40shivam@cluster0.p9muniv.mongodb.net/resume_builder'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

