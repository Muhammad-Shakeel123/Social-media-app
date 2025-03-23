import Router from 'express';

import {
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
} from '../controllers/users.controller.js';
const router = Router();
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/get/:id', getUser);
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);
export default router;
