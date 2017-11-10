var express = require('express');
var router = express.Router();
const Todo = require('../model/toDoSchema.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Todo.find({}, (err, todos) => {
    if(err) {
      return next(err);
    }
  return res.json({payload: todos});
})
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  const todo = new Todo(req.body);
  todo.save((err, entry) => {
    if(err) {
      return next(err);
    }
  return res.json({payload: entry});
})
});






module.exports = router;
// var router = express.Router();
// var express = require('express');
//
// var toDo = require ('../model/toDoSchema.js');
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   toDo.find({}, (err, toDos) => {
//     if (err){
//       return next(err);
//     }
//     return res.json({payload: toDos});
//   })
// });
//
// router.post('/', function(req, res, next) {
//   const toDo =  new toDo (req.body);
//   toDo.save((err,entry) => {
//     if (err){
//       return next (err);
//     }
//     return res.json({payload: entry});
//   })
// });
//
// module.exports = router;
