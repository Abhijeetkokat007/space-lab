import { Post } from "../models/Post.js";

export const createPost = async (req, res) => {

    //only admin can create post so it is admin 
    
    try {
    //   if (req.user.role !== "admin")
    //     return res.status(403).json({
    //       message: "Unauthorized", // condition for checking user role
    //     });
  
      let { description, userid} = req.body;
  
      const image = req.file;
  
      console.log("image", image);
  
      if (!image)
        return res.status(400).json({
          message: "Please give image",
        });
  
      const post = await Post.create({
        description,
        userid,
        image: image?.path,
      });
  
      res.status(201).json({
        message: "Post Created",
        post,
      });
  
      console.log("created post", post);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };