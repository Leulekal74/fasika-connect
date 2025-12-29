import { CheckCircle2, Tractor, Store, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const roles = [
    {
      title: "For Farmers",
      icon: <Tractor className="text-[#13ec13]" />,
      list: ["Weather & crop advice", "Real-time prices", "List produce"],
      btn: "Learn more",
      color: "text-[#13ec13]"
    },
    {
      title: "For Buyers",
      icon: <Store />,
      list: ["Search produce", "Price trends", "Contact farmers"],
      btn: "Learn more",
      color: "text-white"
    }
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-12">Benefits for Everyone</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, i) => (
            <div key={i} className="bg-[#1a2e1a] p-8 rounded-2xl border border-[#283928]">
              <div className="flex gap-3 items-center mb-6">
                {role.icon}
                <h3 className="text-2xl font-bold">{role.title}</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {role.list.map((item, j) => (
                  <li key={j} className="flex gap-3 text-gray-300">
                    <CheckCircle2 size={18} className="text-[#13ec13]" /> {item}
                  </li>
                ))}
              </ul>
              <button className={`font-bold ${role.color}`}>{role.btn} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}