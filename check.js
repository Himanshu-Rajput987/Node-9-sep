
// //http://localhost:3000/delete/user/10
// app.delete('/delete/user/:id',(req , res)=>{
//     let id = parseInt(req.params.id);
//     let index = users.findIndex((user)=>user.id===id)
//     console.log(index);
//     //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//     users.splice(index, 1)
//     //res.end("delete in progress")
//     fs.writeFile('users.json',JSON.stringify(users), (err)=>{
//         if(err){
//             console.log("problem....")
//         }else{
//             console.log("file has been delete")
//             res.end("user deleted...")
//         }
//     })
//     //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// })