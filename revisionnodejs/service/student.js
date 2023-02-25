var student=require("../models/student")
exports.Getstudent = async (req, res) => {
    try {
      const ls= await student.find();
      res.status(200).send({ msg: "list of students", ls});
    } catch (error) {
      res.status(500).send("couldn't get students");
    }
  };
  exports.Getstudentbyage= (req, res, next) => {
    student.aggregate([
      { $match: { age: { $gt: 18 } } }
    ]).exec((err, students) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error retrieving students');
      }
      res.json(students);
    });
  }
  exports.Getstudentbynote = async (req, res) => {
    try { const age=req.body.age
      const ls= await student.find({age});
      res.status(200).send({ msg: "list of students>18", ls});
    } catch (error) {
      res.status(500).send("couldn't get students");
    }
  };
  exports.Addstudent=async (req, res) =>{
    try
    {const st= new student(req.body);
       await st.save();
    res.status(200).send({msg:"student added",st})
    
    
    }
    catch (error) {
        res.status(200).send("student cannot be added")
    
    }};


    exports. getStudentsNameSort = (req, res) => {
      student.find({note:{$gte:10}}).sort({name:1}).exec((err, data) => {
          if (err) {
              res.status(500).send({ message: err.message || "Some error occurred while retrieving students." });
          } else {
              res.json(data);
          }
      });
  };
  exports. getStudentByName = (req, res)  => {
    const name = req.params.name;
    student.aggregate([
      { $match: { name: name } }
    ]).exec((err, students) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error retrieving students');
      }
      res.json(students);
    });
  }
    exports.Deletestudent= async(req, res) =>{
      try
      {const deleted= await student.findByIdAndDelete(req.params.id)
         
      res.status(200).send({msg:"student deleted",deleted})
      
     
      }
      catch (error) {
          res.status(500).send("couldnt delete student")
      
      }};

   
      exports.Editstudent=async(req, res) =>{
    
        student.findByIdAndUpdate(
            // the id of the item to find
            req.params.id,
            
            // the change to be made. Mongoose will smartly combine your existing 
            // document with this change, which allows for partial updates too
            req.body,
            
            // an option that asks mongoose to return the updated version 
            // of the document instead of the pre-updated one.
            {new: true},
            
            // the callback function
            (err, todo) => {
            // Handle any possible database errors
                if (err) return res.status(500).send(err);
                return res.send(todo);
            }
        )
        
 }