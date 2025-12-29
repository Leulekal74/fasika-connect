import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#283928] bg-[#102210]/95 backdrop-blur-sm px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 font-bold text-lg">
         {/* This icon uses the Material Symbols you already had in your HTML */}
         <span className="material-symbols-outlined text-[#13ec13]">agriculture</span>
         Fasika Farmers’ Connect
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/market" className="text-sm text-gray-400 hover:text-white">Market</Link>
        <Link to="/weather" className="text-sm text-gray-400 hover:text-white">Weather</Link>
        <div className="flex gap-4 ml-4">
          <Link to="/login" className="text-sm text-gray-400 py-2">Log in</Link>
          <Link to="/register" className="bg-[#13ec13] text-[#111811] px-4 py-2 rounded-lg font-bold hover:bg-[#0fb80f] transition-colors">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}