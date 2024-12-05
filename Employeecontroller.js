const Employee = require("../Model/Employeeschema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

const saveEmployee = (req, res) => {
    console.log(req.body)
    console.log(req.file)

    const newEmployee = new Employee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dateofbirth: req.body.dateofbirth,
        gender: req.body.gender,
        contact: req.body.contact,
        employeeid: req.body.employeeid,
        position: req.body.position,
        dateofjoining: req.body.dateofjoining,
        username: req.body.username,
        password: req.body.password,
        image: req.file,
        
        //image: req.file ? req.file.path : null

    });

    newEmployee.save()
        .then((result) => {
            res.json({
                status: 201,
                data: result,
                message: "Employee details added successfully"
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                message: "Failed to add details",
                error: err.message,
            });
        });
};
const deleteemployee=async(req,res)=>{
    const id=req.params.employeeid
    console.log(id)
await Employee.findByIdAndDelete(id)
.then((resutl)=>{
    res.json({status:200,message:"successfully deleted"})
})
.catch((err)=>
    res.json({ status:401,message:"unsuccessful"})
)

}
const update=async(req,res)=>{
    const id=req.params.employeeid
    console.log(id)
   await Employee.findByIdAndUpdate(id)
   .then((result)=>{
res.json({status:200,message:"this employee diactivated"})
   })
   .catch((err)=>{
    res.json({status:401,message:"unsucessful"})
   })
}




const edit=async(req,res)=>{
    const id=req.params.employeeid
    const user= Employee.findOne(id)
    console.log(id)
    const {firstname,lastname,username,position,contact,password,employeeid,gender,dateofbirth,}=req.body
    await Employee.findByIdAndUpdate(id,{firstname,lastname,dateofbirth,
        position,employeeid,password,gender,
        contact,username},
        {new:true})
    .then((result)=>{
        res.json({status:200,message:"details updated",data:result})
    })
    .catch((err)=>{res.json({status:401,message:"upadation failed"})})
}

const profileemployee=async(req,res)=>{
    const id=req.params.employeeid
    console.log(id)
  await Employee.findById(id)
 
.then((resutl)=>{
    res.json({status:200,message:"successfully found profile",data:resutl})
    
})
.catch((err)=>
    res.json({ status:401,message:"unsuccessful"})
)

}


const saveLogin = async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body
    try {
        const user = await Employee.findOne({ username });

        if (!user) {
            console.log("Login failed: User not found");
            return res.status(404).json({ message: "Login failed: User not found" });
        }
        console.log(user.username);
        console.log(password);

        if (password !== user.password) {

            console.log("Login failed: Incorrect password");
            return res.status(401).json({ message: "Login failed: Incorrect password" });
        }

        console.log("Login successful");
        return res.status(200).json({ message: "Login successful" ,id:user._id});

    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

const findall = (req, res) => {


    Employee.find()


    .then((result) => {
       
        res.json({
            status: 201,
            data: result,
            message: " successfull"
        })
    })  
.catch ((err) => {
    res.status(500).json({
        status: 500,
        message: "Failed ",
        error: err.message,
    });
})}

module.exports = {upload, saveEmployee,saveLogin,findall,deleteemployee,profileemployee,update,edit};