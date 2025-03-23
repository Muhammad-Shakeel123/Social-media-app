export default function Online({ user }) {
  return (
    <li className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-105">
      {/* Profile Picture with Online Indicator */}
      <div className="relative">
        <img
          className="w-12 h-12 rounded-full object-cover shadow-md border-[3px] border-gray-200"
          src={user.profilePicture}
          alt=""
        />
        {/* Animated Online Indicator */}
        <span className="w-3.5 h-3.5 rounded-full bg-lime-500 absolute top-0 right-0 border-[2px] border-white animate-pulse"></span>
      </div>

      {/* Username with Style */}
      <span className="text-lg font-semibold text-gray-800 tracking-wide">
        {user.username}
      </span>
    </li>
  );
}
