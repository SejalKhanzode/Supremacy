//import models
const DiscussQue = require("../models/DiscussQue");
const DiscussLike = require("../models/DiscussLike");

//like a post
exports.likeDiscussQue = async (req, res) => {
  try {
    const {userId} = req.user.id;
    const { discussQueId } = req.body;
    // const like = new DiscussLike({
    //   discussQueId,
    //   userId,
    // });
    // const savedLike = await like.save();

    const like = await DiscussLike.create({
        discussQueId, userId
    })
    const udpatedDiscussQue = await DiscussQue.findByIdAndUpdate(
      discussQueId,
      { $push: { likes: like._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.status(200).json({
      success:true,
      message:"Like to discussion que added successfully"
      ,udpatedDiscussQue,
    });
  } catch (error) {
    console.log("Error while Liking post", error)
    return res.status(400).json({
      success:false,
      message:error.message
    });
  }
};

//Unlike a post
exports.unlikeDiscussQue = async (req, res) => {
  try {
    const { discussQueId, likeId } = req.body;
    const deletedLike = await DiscussLike.findOneAndDelete(
       discussQueId,{ 
        like: likeId
     });

    const udpatedQue = await DiscussQue.findByIdAndUpdate(
      discussQueId,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );

    res.status(200).json({
        success:true,
        message:"Question unlike successfully",
      post: udpatedQue,
    });
  } catch (error) {
    console.log("error in unlikeing>", error)
    return res.status(400).json({
        success:false,
        message:error.message,
      error: "Error while Unliking post",
    });
  }
};
