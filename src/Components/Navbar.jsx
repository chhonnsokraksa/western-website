import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-[#163462] text-white border-b border-blue-900">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" end className="font-bold text-lg">
          Western University
        </NavLink>

        <div className="flex gap-5 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "border-b-2 border-amber-400 pb-1" : "hover:text-gray-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-amber-400 pb-1" : "hover:text-gray-200"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/programs"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-amber-400 pb-1" : "hover:text-gray-200"
            }
          >
            Programs
          </NavLink>
          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-amber-400 pb-1" : "hover:text-gray-200"
            }
          >
            Admissions
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-amber-400 pb-1" : "hover:text-gray-200"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}