import { Router } from "express";
import {
  createPost,
  deletePost,
  listPosts,
  getPostById,
  updatePost,
} from "../controllers/post-controller";

const postRouter = Router();

postRouter.get("/", listPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

export default postRouter;
