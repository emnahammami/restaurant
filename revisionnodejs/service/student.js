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
    User.aggregate([
        { $match : age>18 },
        { $sort : {name:-1}  },
        { $project : { _id : 0, name : 1  } }
    ])
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
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