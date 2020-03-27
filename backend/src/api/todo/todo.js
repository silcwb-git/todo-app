const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, require:true },
    done: { type: Boolean, require: true, defautl: false },
    createdAt: { type: Date, defautl: Date.now }
})

module.exports = restful.model('Todo', todoSchema)