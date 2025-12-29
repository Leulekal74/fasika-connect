export default function Footer() {
  return (
    <footer className="bg-[#141f14] border-t border-[#283928] py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-4xl font-black mb-6">Join Fasika Today</h2>
        <div className="flex justify-center gap-4 mb-12">
           <button className="bg-[#13ec13] text-[#111811] px-8 py-3 rounded-lg font-bold">Register Now</button>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© 2023 Fasika Farmers’ Connect. Addis Ababa University.</p>
          <div className="flex gap-4">
            <a href="#">Privacy</a><a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}