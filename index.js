const express = require('express');
const app = express();
const users = require('./users.json');
const fs = require('fs');
app.use(express());

//http://localhost:3000/edit/user/5
app.put('/edit/user/:id', (req,res)=>{
    let id = parseInt(req.params.id);
    let index = users.findIndex((user)=>user.id===id);
    console.log(index);
    users[index].first_name = "Amit";
    fs.writeFile('users.json', JSON.stringify(users), (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("File has been updated");
            res.end("success");
        }
    })
    res.end("Successfully");
})

//htttp://localhost:3000/delete/user/5
app.delete('/delete/user/:id', (req, res)=>{
    let id = parseInt(req.params.id);
    let index = users.findIndex((user)=>user.id===id);
    console.log(index);
    users.splice(index, 1);
    res.end("delete in progress");
    fs.writeFile('users.json', JSON.stringify(users), (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Success..");
            res.end("successfully");
        }
    })
})



app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running on port no 3000");
    }
})