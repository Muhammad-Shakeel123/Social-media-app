import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
      {/* Fixed Topbar for Better UX */}
      <Topbar />

      {/* Main Layout Grid */}
      <div className="grid grid-cols-12 gap-6 px-6 py-4 mt-4">
        {/* Sidebar (Left) */}
        <div className="col-span-3 hidden lg:block transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
            <Sidebar />
          </div>
        </div>

        {/* Feed (Center) */}
        <div className="col-span-12 lg:col-span-6 transition-opacity duration-500 animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <Feed />
          </div>
        </div>

        {/* Rightbar (Right) */}
        <div className="col-span-3 hidden lg:block transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg">
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
