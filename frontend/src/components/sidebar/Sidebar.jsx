import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@mui/icons-material';
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className="flex-[3] h-[calc(100vh-50px)] overflow-y-auto sticky top-[50px] bg-white shadow-2xl rounded-xl p-5 transition-all duration-300">
      <div className="space-y-6">
        {/* Sidebar Items */}
        <ul className="space-y-2">
          {[
            { icon: <RssFeed className="text-blue-500" />, text: 'Feed' },
            { icon: <Chat className="text-green-500" />, text: 'Chats' },
            {
              icon: <PlayCircleFilledOutlined className="text-red-500" />,
              text: 'Videos',
            },
            { icon: <Group className="text-purple-500" />, text: 'Groups' },
            {
              icon: <Bookmark className="text-yellow-500" />,
              text: 'Bookmarks',
            },
            {
              icon: <HelpOutline className="text-orange-500" />,
              text: 'Questions',
            },
            { icon: <WorkOutline className="text-blue-700" />, text: 'Jobs' },
            { icon: <Event className="text-green-600" />, text: 'Events' },
            { icon: <School className="text-indigo-500" />, text: 'Courses' },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 bg-gray-100 hover:bg-gradient-to-r from-indigo-500 to-purple-500 hover:text-white shadow-md hover:scale-105 hover:shadow-xl"
            >
              {item.icon}
              <span className="font-semibold text-black group-hover:text-white transition-colors duration-300">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* Show More Button */}
        <div className="flex justify-center">
          <button className="w-[180px] py-2 text-lg font-semibold rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
            Show More
          </button>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* Close Friends Section */}
        <h4 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Close Friends
        </h4>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {Users.map(u => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
