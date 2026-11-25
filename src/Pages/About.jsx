import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full bg-gray-100 py-12 flex-1">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {/* Intro Header */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold text-[#163462] mb-4">
            About Western University
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            Western University is a sample website built to teach React. Our mission
            is to help students learn practical skills and build real projects.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-[#163462] mb-2">
              Our Approach
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We focus on project-based learning where students apply modern web
              tools, components, and routing from day one.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-[#163462] mb-2">
              Campus &amp; Community
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Students collaborate in small cohorts alongside mentors and peers
              to build portfolios ready for real-world opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="bg-amber-50 border-l-4 border-amber-400 px-5 py-4 text-sm text-gray-800 flex flex-wrap items-center justify-between gap-4">
          <span>Want to see what degrees we offer?</span>
          <Link
            to="/programs"
            className="text-blue-700 font-medium underline hover:text-blue-900"
          >
            View our programs →
          </Link>
        </div>
      </div>
    </div>
  );
}