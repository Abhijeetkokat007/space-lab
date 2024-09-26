import mongoose from "mongoose";

const schema = new mongoose.Schema({

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  userid :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Post= mongoose.model("Post", schema);
