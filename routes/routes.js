//Aqui tendremos el router y donde especificaremos los endpoints
const express = require('express');

const router=express.Router();

const Task=require('../models/Tasks.js')

router.get('/', async (req, res)=>{
    try{
        console.log('estoy dentro del get')
        const tasks= await Task.find();
        console.log(tasks.length);
        if(tasks.length==0){
            res.status(400).send('No hay TASKS en la base de datos');
        }
        res.status(200).json(tasks);
    }
    catch (err) {
        res.status(400).send('No se ha podido realizar la peticion de todas las TASKS');
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