import { User } from '../models/user.model.js';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiErrors.js';
import ApiResponse from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, username } = req.body;

  if (![email, password, username].every(field => field?.trim())) {
    throw new ApiError(400, 'All fields are required');
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] }) ;
  if (existingUser) {
    throw new ApiError(400, 'User already exists');
  }

  const user = await User.create({
    email,
    password,
    username,
  });

  const createdUser = await User.findById(user._id).select('-password');

  if (!createdUser) {
    throw new ApiError(500, 'Failed to create user');
  }

  return res
    .status(201)
    .json(new ApiResponse(201, 'User created successfully', createdUser));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }
  const user = await User.findOne({
    $or: [{ email }, { password }],
  });
  if (!user) {
    throw new ApiError(401, 'User Dose Not exist');
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid creditinals');
  }
  const loggedInUser = await User.findById(user._id).select('-password');
  return res
    .status(201)
    .json(new ApiResponse(200, loggedInUser, 'User logged in successfully'));
});

export { registerUser,loginUser };
