import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-xl">
        <div className="flex items-center space-x-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-lg shadow-lg">
          <img className="w-12 h-12 rounded-full shadow-md" src="assets/gift.png" alt="Gift" />
          <span className="text-sm font-light">
            <b className="font-semibold">Pola Foster</b> and <b className="font-semibold">3 other friends</b> have a birthday today.
          </span>
        </div>

        <img
          className="w-full h-auto rounded-lg shadow-lg my-6 transition-transform transform hover:scale-105 duration-300"
          src="assets/ad.png"
          alt="Ad"
        />

        <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Online Friends</h4>
        <ul className="space-y-4">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-xl">
        <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">User Information</h4>
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">City:</span>
            <span className="font-light">New York</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">From:</span>
            <span className="font-light">Madrid</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Relationship:</span>
            <span className="font-light">Single</span>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-gray-800 mt-8 mb-4 border-b pb-2">User Friends</h4>
        <div className="grid grid-cols-3 gap-4">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer transform transition-all hover:scale-105"
              >
                <img
                  src={`assets/person/${index + 1}.jpeg`}
                  alt={`Friend ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-xl shadow-md"
                />
                <span className="mt-2 font-medium text-gray-800">John Carter</span>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex-[3.5] p-6">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
}
