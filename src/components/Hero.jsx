import { Sun, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-full border border-[#283928] bg-[#1a2e1a] px-3 py-1 text-sm font-medium text-[#13ec13] w-fit">
              <span className="flex h-2 w-2 rounded-full bg-[#13ec13] mr-2 animate-pulse"></span>
              Digital support for Ethiopia’s farmers
            </div>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl text-white">
              Know the weather. <span className="text-[#13ec13]">Know the price.</span> Reach the market.
            </h1>
            <p className="text-lg text-gray-300">A low-bandwidth platform connecting smallholder farmers with buyers in Ethiopia.</p>
            <div className="flex gap-4">
              <button className="bg-[#13ec13] text-[#111811] px-8 py-3 rounded-lg font-bold">Register Now</button>
              <button className="border border-[#3b543b] px-8 py-3 rounded-lg font-bold">Log in</button>
            </div>
          </div>
          {/* Mockup Dashboard */}
          <div className="bg-[#141f14] border border-[#283928] rounded-2xl p-6 shadow-2xl h-[400px] grid grid-cols-2 gap-4">
             <div className="bg-[#1a2e1a] p-4 rounded-xl border border-[#283928] flex flex-col justify-between">
                <Sun className="text-[#13ec13]" size={40} />
                <div className="h-4 w-20 bg-white/10 rounded"></div>
             </div>
             <div className="bg-[#1a2e1a] p-4 rounded-xl border border-[#283928] flex flex-col justify-between">
                <TrendingUp className="text-[#13ec13]" size={40} />
                <div className="h-4 w-20 bg-[#13ec13]/20 rounded"></div>
             </div>
             <div className="col-span-2 bg-[#1a2e1a] p-4 rounded-xl border border-[#283928]">
                <div className="space-y-3">
                  <div className="h-3 w-full bg-[#283928] rounded"></div>
                  <div className="h-3 w-2/3 bg-[#283928] rounded"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}