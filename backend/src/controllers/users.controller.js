import { User } from '../models/user.model.js';
import ApiErrors from '../utils/ApiErrors.js';
import ApiResponse from '../utils/ApiResponse.js';
import asyncHandler from '../utils/asyncHandler.js';

const updateUser = asyncHandler(async (req, res) => {
  const { userId, password, isAdmin } = req.body;
  const { id } = req.params;

  // Check if user is authorized to update the account
  if (!userId || (userId !== id && !isAdmin)) {
    throw new ApiErrors(403, 'You can update only your account!');
  }

  const user = await User.findById(id);
  if (!user) {
    throw new ApiErrors(404, 'User not found');
  }

  // If new password is provided, update it (it will be hashed in the model)
  if (password) {
    user.password = password; // Model's pre('save') will hash it
  }

  // Update the user with the request body data
  Object.assign(user, req.body);

  // Save the updated user (triggers hashing if password is changed)
  await user.save();

  // Remove password from response for security
  const updatedUser = await User.findById(id).select('-password');

  return res
    .status(200)
    .json(new ApiResponse(200, 'User updated successfully', updatedUser));
});

const deleteUser = asyncHandler(async (req, res) => { 
    const { userId, isAdmin } = req.body;
    const { id } = req.params;
    if (!userId || (userId !== id && !isAdmin)) { 
        throw new ApiErrors(403, 'You can delete only your account!');
    }
    const user = await User.findById(id);
    if (!user) { 
        throw new ApiErrors(404, 'User not found');
    }
    await User.findByIdAndDelete(id);
    return res.status( 200).json(new ApiResponse(200, 'User deleted successfully'));
})

const getUser = asyncHandler(async (req, res) => { 
    const { id } = req.params;
    const user = await User.findById(id).select('-password');
    if (!user) { 
        throw new ApiErrors(404, 'User not found');
    }
    return res.status(200).json(new ApiResponse(200, 'User found', user));

})
const followUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  // Prevent a user from following themselves
  if (userId === id) {
    throw new ApiErrors(403, "You can't follow yourself");
  }

  const user = await User.findById(id);
  const currentUser = await User.findById(userId);

  if (!user || !currentUser) {
    throw new ApiErrors(404, 'User not found');
  }

  if (user.followers.includes(userId)) {
    throw new ApiErrors(403, 'You already follow this user');
  }

  await user.updateOne({ $push: { followers: userId } });
  await currentUser.updateOne({ $push: { followings: id } });

  return res
    .status(200)
    .json(new ApiResponse(200, 'User followed successfully'));
});

const unfollowUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;

  // Prevent a user from unfollowing themselves
  if (userId === id) {
    throw new ApiErrors(403, "You can't unfollow yourself");
  }

  const user = await User.findById(id);
  const currentUser = await User.findById(userId);

  if (!user || !currentUser) {
    throw new ApiErrors(404, 'User not found');
  }

  if (!user.followers.includes(userId)) {
    throw new ApiErrors(403, "You don't follow this user");
  }

  await user.updateOne({ $pull: { followers: userId } });
  await currentUser.updateOne({ $pull: { followings: id } });

  return res
    .status(200)
    .json(new ApiResponse(200, 'User unfollowed successfully'));
});
export { updateUser,deleteUser,getUser, followUser, unfollowUser };
