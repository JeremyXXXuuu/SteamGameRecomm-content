import express from "express";

import {
  createRecom,
  getGames,
  getGame,
  getDetails,
  getRecomm,
  //getPosts,
  //   getPost,
  //createPost,
  //   updatePost,
  //   likePost,
  //   deletePost,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", getGames);
router.post("/", createRecom);
router.get("/:id", getGame);
router.get("/details/:id", getDetails);
router.get("/recomm/:id", getRecomm);
// router.patch("/:id", updatePost);
// router.delete("/:id", deletePost);
// router.patch("/:id/likePost", likePost);

export default router;
