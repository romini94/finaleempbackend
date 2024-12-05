const Liked = require("../Model/Likeshema");
const Likedemployee = (req, res) => {
    console.log(req.body,"ooo")
    const newLiked = new Liked({
       likeemployeeid:req.body.id,
       adminusername:req.body.admin
    });

    newLiked.save()
        .then((result) => {
            res.json({
                status: 201,
                data: result,
                message: "success"
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                message: "Failed",
                error: err.message,
            });
        });
};
const viewall=(req,res)=>{ Liked.find().populate("likeemployeeid ")
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





module.exports ={Likedemployee,viewall}