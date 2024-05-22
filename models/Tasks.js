//Aqui crearemos el modelo de las Tasks
const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    name:String,
    description:String,
    date:Date
});

const Task=mongoose.model('Task1', taskSchema);

module.exports=Task;