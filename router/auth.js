const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


require('../db/conn');
const Todo = require('../models/todoschema');


router.get('/todos', (req, res) => {
    Todo.find().then(todo => res.json(todo))
    //res.render('hello');    
});


//posting data
router.post('/todos', (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        date: req.body.date
    });

    //console.log(req.body.date);
    // res.send(req.body.task);


    newTodo.save()


})


//deleting data
router.delete('/todos/:id', (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json({ remove: true }))
    //res.render('hello');    
});


// //deleting data
// router.delete('/todos/:id', (req, res) => {
//     Todo.findByIdAndDelete(req.params.id)
//         .then(() => res.json({ remove: true }))
//     //res.render('hello');    
// });

// router.delete('/todos/:_id',(req,res)=>
// {
//     console.log(req.params.id)
//      Todo.deleteMany({ObjectId:req.body._id})
//      .then(()=>res.json({remove:true}))
// })



// router.delete('/todos/:id',(req, res) =>{
//     var id=id
//     Todo.deleteMany(

//         console.log(req.params.id),
//       {

//         _id: {

//         }
//       },

//       function(err, result) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(result);
//         }
//       }
//     );
//   });


// router.get('/todos/:id',(req,res)=>
// {
//     var id1=req.params.id;

//     var count=Object.keys(id1).length;
//     for(let i=0;i<count;i++)
//     {
//         Todo.findByIdAndDelete(Object.keys(id)[i], function(err)
//         {
//             if(err)
//             {
//                 console.log('err in deleting task');
//             }
//         })
//     }
// });






//get by date
router.get('/todos/date/:date', (req, res) => {
    Todo.find({ date: req.params.date }).then(todo => res.json(todo))

    //res.render('hello');    
});

//get and search by title
router.get('/todos/:title', (req, res) => {
    const searchtitle = req.params.title;
    Todo.find({ title: { $regex: searchtitle, $options: '$i' } })
        .then(data => {
            res.send(data);
        })
})




//update
router.put('/todos/:id', (req, res) => {
    Todo.findByIdAndUpdate(
        ({ _id: req.params.id }),
        {
            $set: {

                title: req.body.title,
                date: req.body.date
            }
        })
        .then((result) => res.json({ updated_list: result }))
})


//delete dates
// Todo.remove({date:{$gte:}},(err,data)=>{
//     if(!err)
//     {
//         console.log(data);
//     }
// })
module.exports = router;