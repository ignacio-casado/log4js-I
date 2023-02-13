const yup = require('yup')
const validation = (data) =>{
    const {name, age, email} = req.body
    if(!name || !age || !email)return res.status(400).send({error: "all fields are require"})
    if(typeof name !== "string")return res.status(400).send({error: "name must be a string"})
    if(typeof age !== "number")return res.status(400).send({error: "age must be a number"})
    if(!/^[a-z]+$/i.test(name))return res.status(400).send({error: "name must be a string A-Z"})
    //if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))return res.status(400).send({error: "Invalid email"})
}
const validateYup = (req,res, next)=>{
    const Schema = yup.object().shape({
        name: yup.string().min(5).matches(/^[a-z]+$/).required()
    })
    Schema.validateSync(req.body)
    next()
}

module.exports = {validation, validateYup}