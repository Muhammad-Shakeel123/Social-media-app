import { useState } from 'react';

export default function Register() {
  const [hover, setHover] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-500 relative overflow-hidden">
      {/* Soft Glowing Waves */}
      <div className="absolute inset-0 animate-softWaves"></div>

      {/* Floating Glass Card */}
      <div
        className={`relative w-[400px] p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-lg shadow-blue-500/30 flex flex-col items-center gap-6 transition-all duration-500 ${
          hover ? 'scale-105 shadow-blue-500/60' : ''
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Title */}
        <h3 className="text-5xl font-bold text-white tracking-wide drop-shadow-lg">
          Lamasocial
        </h3>
        <p className="text-gray-300 text-center text-lg">
          Join the future of social networking.
        </p>

        {/* Inputs */}
        <input
          placeholder="Username"
          className="w-full h-12 px-5 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <input
          placeholder="Email"
          className="w-full h-12 px-5 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 px-5 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <input
          type="password"
          placeholder="Password Again"
          className="w-full h-12 px-5 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />

        {/* Buttons */}
        <button className="w-full h-12 rounded-lg bg-blue-500 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-700">
          Sign Up
        </button>

        <button className="w-full h-12 rounded-lg bg-green-500 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-green-700">
          Log into Account
        </button>
      </div>

      {/* Animated Soft Waves */}
      <style jsx>{`
        @keyframes softWaves {
          0% {
            background: radial-gradient(
              circle,
              rgba(0, 0, 0, 0.2) 10%,
              transparent 70%
            );
            opacity: 0.3;
          }
          50% {
            background: radial-gradient(
              circle,
              rgba(0, 0, 0, 0.3) 30%,
              transparent 90%
            );
            opacity: 0.6;
          }
          100% {
            background: radial-gradient(
              circle,
              rgba(0, 0, 0, 0.2) 10%,
              transparent 70%
            );
            opacity: 0.3;
          }
        }
        .animate-softWaves {
          animation: softWaves 6s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
