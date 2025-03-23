import Router from "express"
import {
  createPost,
  updatePost,
  deletePost,
  likeOrDislikePost,
  getPostById,
  getTimelinePosts,
} from '../controllers/post.controller.js';

const router = Router()
router.post("/create-post", createPost)
router.put("/update-post/:id", updatePost)
router.delete("/delete-post/:id", deletePost)
router.put('/:id/like-or-dislike-post', likeOrDislikePost);
router.get('/get-post/:id', getPostById);
router.get('/get-timeline-posts/:userId', getTimelinePosts);
export default router;