import express from 'express';
import mongoose from 'mongoose';

const app= express();
const PORT= 3000;



app.get('/', (req,res)=>{
    res.send("Hello from node Api server");
});

mongoose.connect("mongodb+srv://sbosh88dubazane_db_user:SBH55springs@expressdb.hehk9nu.mongodb.net/Node-API?appName=expressDB")
.then(()=>{
    console.log('Connected to database');
    app.listen(PORT,()=>{
    console.log('Server is running on port: '+PORT);
});
})
.catch((err)=>{
    console.log("failed to connect to database",err);
});