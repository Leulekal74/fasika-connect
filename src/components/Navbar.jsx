import { Sprout } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#283928] bg-[#102210]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-[#13ec13]">
            <Sprout size={20} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Fasika Farmers’ Connect</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-sm font-medium text-gray-300 hover:text-[#13ec13] transition-colors" href="#how-it-works">How it works</a>
          <a className="text-sm font-medium text-gray-300 hover:text-[#13ec13] transition-colors" href="#features">Features</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[#13ec13] border border-[#13ec13] px-4 py-1.5 rounded-lg font-bold text-sm">Log in</button>
          <button className="bg-[#13ec13] text-[#111811] px-4 py-1.5 rounded-lg font-bold text-sm">Register</button>
        </div>
      </div>
    </header>
  );
}