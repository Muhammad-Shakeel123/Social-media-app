import ApiError from '../utils/ApiErrors.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';
import { Post } from '../models/post.model.js';
import { User } from '../models/user.model.js';

const createPost = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body);

  if (!post) {
    throw new ApiError(500, 'Failed to create post');
  }

  return res
    .status(201)
    .json(new ApiResponse(201, 'Post created successfully', post));
});

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId, ...updateData } = req.body;

  const post = await Post.findById(id);
  if (!post) {
    throw new ApiError(404, 'Post not found');
  }

  if (post.userId !== userId) {
    throw new ApiError(403, 'You can update only your post');
  }

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { $set: updateData },
    { new: true },
  );

  return res
    .status(200)
    .json(new ApiResponse(200, 'Post updated successfully', updatedPost));
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = await Post.findById(id);
  if (!post) {
    throw new ApiError(404, 'Post not found');
  }

  if (post.userId !== userId) {
    throw new ApiError(403, 'You can delete only your post');
  }

  await post.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, 'Post deleted successfully'));
});

const likeOrDislikePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const post = await Post.findById(id);
  if (!post) {
    throw new ApiError(404, 'Post not found');
  }

  const isLiked = post.likes.includes(userId);

  await post.updateOne({
    [isLiked ? '$pull' : '$push']: { likes: userId },
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        `The post has been ${isLiked ? 'disliked' : 'liked'}`,
      ),
    );
});
const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id);
  if (!post) {
    throw new ApiError(404, 'Post not found');
  }

  return res
    .status(200)
    .json(new ApiResponse(200, 'Post retrieved successfully', post));
});

const getTimelinePosts = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const currentUser = await User.findById(userId);
  if (!currentUser) {
    throw new ApiError(404, 'User not found');
  }

  const userPosts = await Post.find({ userId: currentUser._id });

  const friendPosts = await Promise.all(
    currentUser.followings.map(friendId => Post.find({ userId: friendId })),
  );

  const timelinePosts = userPosts.concat(...friendPosts);

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        'Timeline posts retrieved successfully',
        timelinePosts,
      ),
    );
});

export {
  createPost,
  updatePost,
  deletePost,
  likeOrDislikePost,
  getPostById,
  getTimelinePosts,
};
