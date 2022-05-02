import express from "express";

import {
  createRecom,
  getRecoms,
  getRecom,
  getDetails,
  //getPosts,
  //   getPost,
  //createPost,
  //   updatePost,
  //   likePost,
  //   deletePost,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getRecoms);
router.post("/", createRecom);
router.get("/:id", getRecom);
router.get("/details/:id", getDetails);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
