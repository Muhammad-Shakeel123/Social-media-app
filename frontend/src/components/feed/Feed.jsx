import Post from '../post/Post';
import Share from '../share/Share';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/post/get-timeline-posts/67cdcbc1d1daf2c3394adc19`,
        );

        console.log('Fetched posts:', res.data); // Debugging

        // Extract the array from `message` field
        setPosts(Array.isArray(res.data.message) ? res.data.message : []);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setPosts([]); // Prevents errors if request fails
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex-[5.5] bg-gradient-to-b from-gray-100 via-gray-50 to-white min-h-screen py-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Share Section */}
        <div className="bg-white p-6 shadow-xl rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
          <Share />
        </div>

        {/* Posts Section */}
        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map(p => (
              <div
                key={p.id || p._id}
                className="bg-white p-6 shadow-lg rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Post post={p} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
}
