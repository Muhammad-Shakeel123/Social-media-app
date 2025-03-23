import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useState } from 'react';

export default function Share() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full max-w-md mx-auto bg-white/20 backdrop-blur-2xl shadow-2xl rounded-3xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-3xl relative">
      {/* Floating Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-white opacity-10 pointer-events-none"></div>

      {/* Input Section */}
      <div className="flex items-center space-x-4 mb-5">
        <img
          className="w-16 h-16 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-all duration-300 hover:scale-105"
          src="/assets/person/1.jpeg"
          alt="User"
        />
        <input
          placeholder="What's on your mind, Safak? 💭"
          className="flex-1 text-gray-800 placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl px-4 py-3 border border-gray-300 shadow-md transition-all duration-300 hover:shadow-lg"
        />
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-300 my-5 opacity-50" />

      {/* Options in 2 Rows (2 Icons per Row) */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { Icon: PermMedia, text: 'Photo/Video', color: 'text-red-500' },
          { Icon: Label, text: 'Tag', color: 'text-blue-500' },
          { Icon: Room, text: 'Location', color: 'text-green-500' },
          { Icon: EmojiEmotions, text: 'Feelings', color: 'text-yellow-500' },
        ].map(({ Icon, text, color }, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:scale-105 relative group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Icon with Glow Effect */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 ${color}`}
            >
              <Icon className="text-2xl" />
            </div>

            {/* Sliding Text on Hover */}
            <span
              className={`text-gray-700 text-md font-semibold transition-all duration-500 ${
                hovered === index
                  ? 'opacity-100 translate-x-2'
                  : 'opacity-0 -translate-x-3'
              }`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* Share Button */}
      <button className="mt-6 w-full py-3 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
        🚀 Share Now
      </button>
    </div>
  );
}
