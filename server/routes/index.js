const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const TodoList = require('../models/TodoList')


router.get("/whatever", (req, res, next) => {
  //console.log('in whatever',req.user)
  res.json({user:req.user})
})

router.get("/", (req, res, next) => {
  console.log(req.query)
})


router.post('/replaceAllTodos', isLoggedIn, (req, res, next) =>{
  console.log('replace todos from user', req.user ,' with req.body',req.body)
  TodoList.findOneAndUpdate({
    userId:req.user._id
  }, {}, {upsert:true}).then(todoList => {
    todoList.todos = req.body.todos
    todoList.save(()=>{
      res.json({success:true})
    })
  }).catch(err=>{ console.log(err) })
})

module.exports = router;
