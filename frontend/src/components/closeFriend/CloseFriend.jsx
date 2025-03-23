export default function CloseFriend({ user }) {
  return (
    <li className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white/30 backdrop-blur-lg">
      {/* Profile Picture with 3D Effect */}
      <img
        className="w-16 h-16 rounded-full object-cover shadow-md border-[3px] border-gray-300 transition-transform duration-300 hover:scale-110"
        src={user.profilePicture}
        alt=""
      />

      {/* Username Styling */}
      <span className="mt-2 text-lg font-semibold text-gray-800 tracking-wide">
        {user.username}
      </span>
    </li>
  );
}
