//import model
const DiscussQue = require("../models/DiscussQue");
const DiscussComment = require("../models/DiscussComment");

//business logic 

exports.createComment = async (req, res) => {
    try{
        const userId = req.user.id
        // console.log("userId>>",req.user.id)
        const {discussQueId, comment}= req.body;
        
    
        const queDetails = await DiscussQue.findById(discussQueId)

        if(!queDetails){
            res.status(401).json({
                success:false,
                message:"Discussion question is not found"
            })
        }

        const newComment = await DiscussComment.create({
            comment,
            discussQue:discussQueId,
            user: userId,
          })
console.log("newComment>>", newComment);


        const udpatedQue= await DiscussQue.findByIdAndUpdate(
            discussQueId,
            {$push: 
                {comments: newComment._id} },
             {new: true}  )
                            .populate("comments") 
                            .exec();
console.log("updatedQue>>", udpatedQue);

        res.status(200).json({
         success:true,
         message:"Comment created and que updated successfully",
         newComment,
         udpatedQue
        });

    }
    catch(error) {
        console.log("Error in commet creation ", error)
        return res.status(500).json({
            success:false,
            error: "Error While Creating comment" ,
        });
    }
};