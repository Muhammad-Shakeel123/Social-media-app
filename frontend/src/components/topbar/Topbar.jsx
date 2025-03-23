import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="h-[70px] w-full bg-white/10 backdrop-blur-xl shadow-2xl flex items-center sticky top-0 z-[999] px-6 border-b border-gray-200 transition-all duration-300">
      {/* Logo */}
      <Link to= "/">
        <div className="flex-[3]">
          <span className="text-3xl font-extrabold text-white tracking-wide cursor-pointer drop-shadow-lg">
            Lamasocial
          </span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="flex-[5] flex justify-center">
        <div className="w-[80%] max-w-[400px] h-[42px] bg-white/20 backdrop-blur-lg rounded-full flex items-center px-4 shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-400">
          <Search className="text-indigo-500" />
          <input
            placeholder="Search for friends, posts, or videos"
            className="border-none w-full focus:outline-none ml-2 text-sm text-white placeholder-white/70 bg-transparent"
          />
        </div>
      </div>

      {/* Navigation & Icons */}
      <div className="flex-[4] flex items-center justify-end text-white space-x-6">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {['Home', 'Timeline'].map((item, index) => (
            <span
              key={index}
              className="cursor-pointer font-bold hover:text-gray-200 transition duration-300 px-3 py-2 rounded-lg hover:bg-white/20"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Icons with Notifications */}
        <div className="flex space-x-5">
          {[
            { Icon: Person, count: 1 },
            { Icon: Chat, count: 2 },
            { Icon: Notifications, count: 3 },
          ].map(({ Icon, count }, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:scale-110 transition duration-300"
            >
              <Icon className="text-white drop-shadow-lg" fontSize="large" />
              <span className="absolute -top-2 -right-2 bg-indigo-500 w-[20px] h-[20px] text-white text-xs flex items-center justify-center rounded-full shadow-md animate-bounce">
                {count}
              </span>
            </div>
          ))}
        </div>

        {/* Profile Image */}
        {/* Profile Image */}
        <div className="relative min-w-[50px]">
          <img
            src="/assets/person/1.jpeg"
            alt="Profile"
            className="w-[44px] h-[44px] rounded-full object-cover cursor-pointer border-2 border-white hover:border-gray-300 transition duration-300 ring-2 ring-indigo-400"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
