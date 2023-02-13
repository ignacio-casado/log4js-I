const express = require('express')
//const {validation} = require('./utils')
const log4js = require('log4js')
const { validateYup } = require('./utils')
const app = express()
app.use(express.json())
app.listen(8080,()=>console.log(`Server On`))

log4js.configure({
    appenders:{
        consola: {type: "console"},
        debugFile:{type: "file", filename: "./debug.log"}
    },
    categories:{
        default:{
           appenders:["consola"],
           level: "ALL"
        },
        DEV:{
            appenders:["consola"],
            level: "ALL"
        },
        PROD:{
            appenders:["debugFile"],
            level: "ALL"
        }
    }
})

const logger = log4js.getLogger('PROD')

app.get('/',  (req, res)=>{
    logger.error(`ERR`)
    res.send(`Hola mundo`)
})
app.post('/user',validateYup,(req, res)=>{
    

    res.status(200).send({mensage: "OK"})
})