import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
      {/* Fixed Topbar */}
      <Topbar />

      {/* Profile Layout */}
      <div className="grid grid-cols-12 gap-6 px-6 py-4 mt-4">
        {/* Sidebar (Left) */}
        <div className="col-span-3 hidden lg:block transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
            <Sidebar />
          </div>
        </div>

        {/* Profile Content (Center) */}
        <div className="col-span-12 lg:col-span-6 transition-opacity duration-500 animate-fadeIn">
          {/* Profile Header (Fix for Image Cut Issue) */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl pb-16">
            {/* Cover Image */}
            <div className="h-[250px] w-full relative">
              <img
                className="w-full h-full object-cover rounded-t-2xl"
                src="assets/post/3.jpeg"
                alt="Cover"
              />
            </div>

            {/* Profile Image - Corrected Positioning */}
            <div className="relative flex justify-center mt-[-75px]">
              <img
                className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                src="assets/person/11.jpeg"
                alt="Profile"
              />
            </div>

            {/* User Info */}
            <div className="mt-4 text-center">
              <h4 className="text-3xl font-bold text-white drop-shadow-md">
                Safak Kocaoglu
              </h4>
              <span className="text-gray-300 text-lg italic">
                Hello my friends!
              </span>
            </div>
          </div>

          {/* Profile Details Section */}
          <div className="mt-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl text-center shadow-2xl transition-transform duration-300 hover:scale-[1.03]">
            {/* User Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all">
                <h5 className="text-xl font-semibold text-white">Followers</h5>
                <p className="text-2xl font-bold text-blue-400">1.2K</p>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all">
                <h5 className="text-xl font-semibold text-white">Following</h5>
                <p className="text-2xl font-bold text-pink-400">530</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <Feed />
          </div>
        </div>

        {/* Rightbar (Right) */}
        <div className="col-span-3 hidden lg:block transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
