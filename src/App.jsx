import React from 'react';

// Helper for Material Symbols
const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* 1. TOP NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-[#283928] bg-background-dark/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <Icon name="agriculture" />
            </div>
            <span className="text-lg font-bold tracking-tight">Fasika Farmers’ Connect</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {['how-it-works', 'farmers', 'buyers', 'features'].map(link => (
              <a key={link} href={`#${link}`} className="text-sm font-medium text-gray-300 hover:text-primary capitalize">
                {link.replace(/-/g, ' ')}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a className="hidden text-xs font-medium text-gray-400 hover:text-white sm:block" href="#">Admin login</a>
            <div className="h-4 w-px bg-[#283928] hidden sm:block"></div>
            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-[#111811] hover:bg-primary-hover">
              Register
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative pt-16 pb-24 lg:pt-32 px-4">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border border-[#283928] bg-surface-dark px-3 py-1 text-sm font-medium text-primary w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Digital support for Ethiopia’s farmers
            </div>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              Know the weather.<br/>
              <span className="text-primary">Know the price.</span><br/>
              Reach the market.
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              A low-bandwidth platform connecting smallholder farmers with buyers. Get localized advice and trade directly.
            </p>
            <div className="flex gap-4">
              <button className="h-12 bg-primary px-8 rounded-lg font-bold text-[#111811]">Register now</button>
              <button className="h-12 border border-[#3b543b] px-8 rounded-lg font-bold">Log in</button>
            </div>
          </div>

          {/* Abstract Mockup Dashboard */}
          <div className="relative aspect-video lg:aspect-square bg-surface-darker rounded-xl border border-[#283928] p-6 shadow-2xl overflow-hidden flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="bg-surface-dark rounded-lg p-4 flex flex-col justify-between border border-[#283928]">
                <Icon name="wb_sunny" className="text-primary text-4xl" />
                <div className="h-6 w-16 bg-white/20 rounded"></div>
              </div>
              <div className="bg-surface-dark rounded-lg p-4 flex flex-col justify-between border border-[#283928]">
                <Icon name="trending_up" className="text-primary text-4xl" />
                <div className="h-6 w-20 bg-primary/20 rounded"></div>
              </div>
              <div className="col-span-2 bg-surface-dark rounded-lg p-4 border border-[#283928] space-y-3">
                <div className="h-2 w-full bg-[#283928] rounded"></div>
                <div className="h-2 w-2/3 bg-[#283928] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEPS SECTION */}
      <section className="py-20 bg-surface-darker border-y border-[#283928]">
        <div className="mx-auto max-w-7xl px-4 text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Simple steps to get started</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
            <StepCard icon="app_registration" title="1. Register online" desc="Create a free account easily using your phone number." />
            <StepCard icon="query_stats" title="2. See advice and prices" desc="Get localized weather updates and market prices." />
            <StepCard icon="handshake" title="3. Connect and trade" desc="Post your produce for sale or find farmers directly." />
          </div>
        </div>
      </section>

      {/* 4. FOOTER BAR */}
      <footer className="border-t border-[#283928] bg-surface-darker py-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2 font-bold text-white">
            <Icon name="agriculture" className="text-primary" /> Fasika Farmers’ Connect
          </div>
          <p>© 2023 Fasika Farmers’ Connect. Built by AAU students.</p>
        </div>
      </footer>
    </div>
  );
}

// Sub-component for clean organization
function StepCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-surface-dark p-8 border border-[#283928] hover:border-primary/50 transition-colors">
      <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon name={icon} className="text-3xl" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}