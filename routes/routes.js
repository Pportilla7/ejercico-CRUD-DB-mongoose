//Aqui tendremos el router y donde especificaremos los endpoints
const express = require('express');

const router=express.Router();

const Task=require('../models/Tasks.js')

router.get('/', async (req, res)=>{
    try{
        const tasks= await Task.find();
        if(tasks.length==0){
            res.status(400).send('No hay TASKS en la base de datos');
        }
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(400).send('No se ha podido realizar la peticion de todas las TASKS');
    }
})

router.get('/id/:id', async (req, res)=>{
    const {id} = req. params;
    try{
        const task=await Task.findById(id);
        res.status(200).json(task);
    }
    catch (err) {
        res.status(400).send('No hay una task con es ID');
    }
})

router.put('/markAsCompleted/:id', async(req,res)=>{
    const {id} = req. params;
    try{
        const task=await Task.findByIdAndUpdate(id, {completed:true});
        res.status(200).json({mensaje:'Task completada'});
    }
    catch (err) {
        res.status(400).send('No hay una task con es ID');
    }
})

router.put('/id/:id', async(req,res)=>{
    const {id} = req. params;
    const {name}=req.body;
    console.log(id,name);
    try{
        const taskUpdated=await Task.findByIdAndUpdate(id, {name:name});
        res.status(200).json({mensaje:'Titulo de task actualizada', task: taskUpdated});
    }
    catch (err) {
        res.status(400).send('No hay una task con es ID');
    }
})

router.delete('/id/:id', async(req,res)=>{
    const {id} = req. params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
         res.status(200).json({ mensaje: 'Task eliminada correctamente', task: deletedTask });
    } 
    catch (err) {
        res.status(500).send('No se ha podido eliminar la TASK con ese ID');
    }
})

router.post('/create', async (req, res)=>{
   try{
        const task= new Task(req.body);
        await task.save();
        res.status(200).json(task);
   }
   catch (err) {
    res.status(400).send('No se ha podido crear las TASK');
    }
})

module.exports=router;