import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateTokes.js';

// @desc Login user & get token
// @route POST /api/v1/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      user: user,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Get user profile
// @route GET /api/v1/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc create new user
// @route POST /api/v1/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create(req.body);

  if (user) {
    res.status(201).json({
      user: user,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Update user profile
// @route PUT /api/v1/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.address = req.body.address || user.address;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      user: updateUser,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Get users
// @route GET /api/v1/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc Get user by id
// @route GET /api/v1/users/:id
// @access Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Delete user
// @route DELETE /api/v1/users/:id
// @access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User Deleted' });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

// @desc Update user
// @route PUT /api/v1/users/:id
// @access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.address = req.body.address || user.address;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    user.isBlocked = req.body.isBlocked || user.isBlocked;
    user.isOwner = req.body.isOwner || user.isOwner;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

export {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
