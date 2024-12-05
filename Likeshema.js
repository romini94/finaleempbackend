const mongoose=require('mongoose')

const likeSchema = new mongoose.Schema({
    likeemployeeid: {
        type: String,
        ref:"Employee",
    },
    adminusername:{
        type:String,
        ref:"Employee"
    }
}
)

const Liked  = mongoose.model('liked', likeSchema);
module.exports = Liked;