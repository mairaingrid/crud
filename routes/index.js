var express = require('express');
var USER = require('../database/users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    msn:"Bienvenido a la API,CRUD"
  })
  //res.render('index', { title: 'Express' });
});

router.post('/user',(req,res) => {
  var params = req.body;
  params["registerDate"] = new Date();
  params["updateDate"] = new Date();
  var users = new USER(params);
  users.save().then(() => {
    res.status(200).json({
      msn:"usuario registrado con exito"
    });
  });
});
   router.get("/user",(req, res) => {
     USER.find({},(err,docs) => {
       res.status(200).json(docs);
     });
   });
   router.patch("/user",(req, res) => {
     if(req.query.id == null){
       res.status(300).json({
         msn:"Error no existe id"
       });
       return;
     }
     var id = req.query.id;
     var params = req.body;
     USER.findOneAndUpdate({_id: id}, params, (err,docs) => {
       res.status(200).json(docs);
     });
   });
   router.put("/user", (req, res) => {
     if(req.query.id == null){
       res.status(300).json({
         msn:"Error no existe id"
       });
       return;
     }
     var id = req.query.id;
     var params = req.body;
     USER.findOneAndUpdate({_id: id}, params, (err,docs) => {
       res.status(200).json(docs);
     });
   });
   router.delete("/user", async(req, res) => {
     if(req.query.id == null){
       res.status(300).json({
         msn:"Error no existe id"
       });
       return;
     }
     var r = await USER.remove({_id: req.query.id});
       res.status(300).json(r);
     });

module.exports = router;
