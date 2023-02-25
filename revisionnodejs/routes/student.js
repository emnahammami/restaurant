/*const express =require("express")
const router=express.Router()
var student=require("../models/student")

  router.get('/',(req, res, next)=>{
   student.find(
        (err, students) => {
            if(err){
                console.log("error message :"+err); 
            }
            else{
                //res.render(
                    //'form.twing',
                    res.json(
                    {
                        title : "student listudent",
                        cont : students
                    }
                   // )
                );
            }
        }
    );
    //res.json({message:'Hello'});
});





router.post('/', function(req, res, next) {
    new student({
        name: req.body.name,
        age : req.body.age
    })
    .save(
    (err,student)=>{
        if (err)
            console.log("error message :"+err); 
        else{
            console.log(student);
            res.json(" Contact : " + student._id+student.name +" added");
        }
    }
    );
});
router.delete('/:id', function(req, res, next) {
  try
  {student.findByIdAndDelete(req.params.id, (err, cont)=> {
    res.send('deleted');
  })
     
  // res.studentatus(200).send({msg:"usser deleted",deleted})
  
 
  }
  catch (error) {
      res.studentatus(500).send("couldnt delete user")
  
  }}

);

router.get('/:id', function(req, res, next) {
    try
    {student.findById(req.params.id, (err, cont)=> {
      res.send(cont);
    })
       
    // res.studentatus(200).send({msg:"usser deleted",deleted})
    
   
    }
    catch (error) {
        res.studentatus(500).send("couldnt delete user")
    
    }}
  
  );


router.put('/:id', function(req, res, next) {
    student.findByIdAndUpdate(
        // the id of the item to find
        req.params.id,
        
        // the change to be made. Mongoose will smartly combine your existudenting 
        // document with this change, which allows for partial updates too
        req.body,
        
        // an option that asks mongoose to return the updated version 
        // of the document instudentead of the pre-updated one.
        {new: true},
        
        // the callback function
        (err, todo) => {
        // Handle any possible database errors
            if (err) return res.status(500).send(err);
            return res.send(todo);
        }
    )}
  
  );





  module.exports = router;*/
  const express = require("express");
const { getStudentByName,getStudentsNameSort,Deletestudent,Editstudent,Addstudent,Getstudent,Getstudentbyage} = require("../service/student");


const studentRoutes = express.Router();


studentRoutes.get('/showbyname/:name', getStudentByName);
studentRoutes.get("/namesort",getStudentsNameSort)
studentRoutes.get("/all",Getstudent)
studentRoutes.get("/allmajor",Getstudentbyage)
studentRoutes.post("/Add",Addstudent)
studentRoutes.delete("/delete/:id", Deletestudent);
studentRoutes.put("/edit/:id", Editstudent);

module.exports = studentRoutes;
