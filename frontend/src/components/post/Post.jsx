import { MoreVert } from '@mui/icons-material';
// import { Users } from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {format} from "timeago.js"

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
    useEffect(() => {
      const fetchUser = async () => {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/get/${post.userId}`,
        );
        console.log('Posts data', res);
        setUser(res.data.message);
      };
      fetchUser();
    }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 my-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={
              user.profilePicture?.trim()
                ? user.profilePicture
                : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            }
            alt=""
          />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-black">
              {user.username}
            </h3>
            <p className="text-sm text-gray-500">{format(post.createdAt)}</p>
          </div>
        </div>
        <MoreVert className="cursor-pointer text-gray-500 hover:text-gray-700 transition" />
      </div>

      {/* Post Content */}
      <div className="mt-4">
        <p className="text-gray-700">{post?.desc}</p>
        {post.photo && (
          <img
            className="mt-3 w-full rounded-lg object-cover max-h-[400px] transition-transform duration-300 hover:scale-105"
            src={post.img}
            alt=""
          />
        )}
      </div>

      {/* Like & Comment Section */}
      <div className="flex items-center justify-between mt-4">
        {/* Like Button */}
        <div className="flex items-center space-x-2">
          <img
            className="w-7 h-7 cursor-pointer transition-transform duration-200 hover:scale-110"
            src="assets/like.png"
            onClick={likeHandler}
            alt="Like"
          />
          <img
            className="w-7 h-7 cursor-pointer transition-transform duration-200 hover:scale-110"
            src="assets/heart.png"
            onClick={likeHandler}
            alt="Love"
          />
          <span className="text-gray-600 text-sm font-medium">
            {like} {like === 1 ? 'person likes' : 'people like it'}
          </span>
        </div>

        {/* Comment Count */}
        <span className="text-sm text-indigo-600 font-medium cursor-pointer border-b-2 border-dashed border-indigo-500 hover:border-solid transition">
          {post.comment} comments
        </span>
      </div>
    </div>
  );
}
