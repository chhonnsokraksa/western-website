import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#163462] text-white py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-6 text-xs space-y-3">
        <p className="text-gray-200">
          © 2026 Western University. Sample website for teaching.
        </p>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="underline hover:text-amber-300">
            Contact us
          </Link>
          <span>|</span>
          <Link to="/admissions" className="underline hover:text-amber-300">
            Apply now
          </Link>
        </div>
      </div>
    </footer>
  );
}