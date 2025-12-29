import React, { useState } from 'react';

// --- HELPER: ICON ---
const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// --- 1. NAVBAR ---
const Navbar = ({ setCurrentPage, currentPage }) => (
  <nav className="sticky top-0 z-50 border-b border-[#283928] bg-[#102210]/95 backdrop-blur-md px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2 font-bold text-white cursor-pointer" onClick={() => setCurrentPage('home')}>
      <Icon name="agriculture" className="text-[#13ec13]" />
      <span className="hidden sm:inline">Fasika Connect</span>
    </div>
    <div className="flex gap-4 md:gap-8 text-sm font-medium">
      {['home', 'market', 'weather', 'advisory'].map((page) => (
        <button 
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${currentPage === page ? 'text-[#13ec13]' : 'text-gray-400'} hover:text-white capitalize transition-colors`}
        >
          {page}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-3">
      <button onClick={() => setCurrentPage('login')} className="hidden sm:block text-gray-400 hover:text-white text-sm">Log in</button>
      <button onClick={() => setCurrentPage('register')} className="bg-[#13ec13] text-black px-4 py-2 rounded-lg font-bold text-xs md:text-sm">Join</button>
    </div>
  </nav>
);

// --- 2. AUTH SYSTEM (Login, Register, Forgot Password) ---
const AuthSystem = ({ initialMode }) => {
  const [mode, setMode] = useState(initialMode); // 'login', 'register', 'forgot'

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1a2e1a] border border-[#283928] p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">
          {mode === 'login' && 'Welcome Back'}
          {mode === 'register' && 'Join Fasika'}
          {mode === 'forgot' && 'Reset Password'}
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          {mode === 'login' && 'Enter your farm credentials.'}
          {mode === 'register' && 'Connect with 15M Ethiopian farmers.'}
          {mode === 'forgot' && 'Enter your email to receive a reset link.'}
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {mode === 'register' && (
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
              <input type="text" className="w-full bg-[#102210] border border-[#283928] rounded-xl px-4 py-3 text-white mt-1 focus:border-[#13ec13] outline-none" placeholder="Abebe Bikila" />
            </div>
          )}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
            <input type="email" className="w-full bg-[#102210] border border-[#283928] rounded-xl px-4 py-3 text-white mt-1 focus:border-[#13ec13] outline-none" placeholder="farmer@ethiopia.com" />
          </div>
          {mode !== 'forgot' && (
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Password</label>
              <input type="password" className="w-full bg-[#102210] border border-[#283928] rounded-xl px-4 py-3 text-white mt-1 focus:border-[#13ec13] outline-none" placeholder="••••••••" />
            </div>
          )}
          {mode === 'login' && (
            <div className="text-right">
              <button onClick={() => setMode('forgot')} className="text-[#13ec13] text-xs hover:underline">Forgot Password?</button>
            </div>
          )}
          <button className="w-full bg-[#13ec13] text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
            {mode === 'login' ? 'Sign In' : mode === 'register' ? 'Create Account' : 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          {mode === 'login' ? "New here? " : "Go back to "}
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="text-[#13ec13] font-bold hover:underline">
            {mode === 'login' ? 'Register Now' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- 3. MARKET MODULE ---
const MarketPage = () => {
  const crops = [
    { name: "Magna Teff", price: "9,200 ETB", region: "Gojjam", status: "High Demand" },
    { name: "Sidama Coffee", price: "18,500 ETB", region: "Oromia", status: "Export Grade" },
    { name: "Red Onions", price: "4,200 ETB", region: "Meki", status: "Stable" }
  ];
  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-8 text-[#13ec13]">Live Ethiopia Market Prices</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {crops.map((c, i) => (
          <div key={i} className="bg-[#1a2e1a] border border-[#283928] p-6 rounded-2xl hover:border-[#13ec13] transition-all">
            <span className="text-[10px] bg-[#13ec13]/20 text-[#13ec13] px-2 py-1 rounded uppercase font-bold">{c.status}</span>
            <h3 className="text-xl font-bold mt-2">{c.name}</h3>
            <p className="text-3xl font-black my-4">{c.price}</p>
            <div className="flex justify-between text-gray-500 text-sm">
              <span>{c.region}</span>
              <Icon name="trending_up" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 4. WEATHER MODULE ---
const WeatherPage = () => (
  <div className="p-8 max-w-4xl mx-auto text-white">
    <div className="bg-[#1a2e1a] border border-[#13ec13]/30 p-10 rounded-3xl relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-5xl font-black mb-2">24°C</h2>
        <p className="text-gray-400 mb-8">Addis Ababa, Ethiopia • Sunny</p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl flex gap-3 items-center">
          <Icon name="warning" className="text-yellow-500" />
          <p className="text-sm text-yellow-100">Frost Warning: Expected in Highlands tomorrow night. Protect young seedlings.</p>
        </div>
      </div>
      <Icon name="wb_sunny" className="absolute -top-10 -right-10 text-[200px] text-yellow-500/10" />
    </div>
  </div>
);

// --- 5. HOME PAGE ---
const HomePage = () => (
  <section className="py-24 px-6 text-center text-white">
    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
      ETHIOPIA’S <br /><span className="text-[#13ec13]">DIGITAL FARM.</span>
    </h1>
    <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10">
      Direct market access, localized weather alerts, and expert agronomy for Ethiopia's smallholder farmers.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <button className="bg-[#13ec13] text-black px-10 py-4 rounded-2xl font-black text-lg">Check Prices</button>
      <button className="border border-[#283928] px-10 py-4 rounded-2xl font-bold">Watch Demo</button>
    </div>
  </section>
);

// --- MAIN APP ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#102210] font-['Work_Sans'] selection:bg-[#13ec13] selection:text-black">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      
      <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'market' && <MarketPage />}
        {currentPage === 'weather' && <WeatherPage />}
        {currentPage === 'advisory' && <div className="p-20 text-center text-white">Advisory coming soon...</div>}
        {currentPage === 'login' && <AuthSystem initialMode="login" />}
        {currentPage === 'register' && <AuthSystem initialMode="register" />}
      </main>

      <footer className="py-20 text-center border-t border-[#283928] mt-20 opacity-50">
        <p className="text-gray-500 text-sm">© 2025 Fasika Farmers’ Connect. Built for the future of Ethiopia.</p>
      </footer>
    </div>
  );
}