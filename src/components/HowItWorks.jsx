import { UserPlus, BarChart, Handshake } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: <UserPlus />, title: "1. Register", desc: "Create a free account with your phone number." },
    { icon: <BarChart />, title: "2. Get Advice", desc: "Check weather and real-time market prices." },
    { icon: <Handshake />, title: "3. Trade", desc: "Connect directly with buyers and sellers." }
  ];

  return (
    <section className="py-20 bg-[#141f14] border-y border-[#283928]" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Simple steps to get started</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#1a2e1a] p-8 rounded-2xl border border-[#283928] text-left">
              <div className="text-[#13ec13] mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}