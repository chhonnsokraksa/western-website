import { Link } from "react-router-dom";

export default function Admissions() {
  return (
    <section className="w-full bg-gray-100 py-12 flex-1">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {/* Intro Card */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold text-[#163462] mb-3">
            Admissions
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            This is admissions. If you face any problem, feel free to contact us.
          </p>
        </div>

        {/* Simple Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-amber-600">
              Step 1
            </span>
            <h2 className="text-lg font-bold text-[#163462] mt-1 mb-2">
              Choose a Program
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore our degrees in Technology, Design, and Business to find your fit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-amber-600">
              Step 2
            </span>
            <h2 className="text-lg font-bold text-[#163462] mt-1 mb-2">
              Prepare Documents
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Submit your high school transcript, ID copy, and completed application form.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-xs font-bold uppercase text-amber-600">
              Step 3
            </span>
            <h2 className="text-lg font-bold text-[#163462] mt-1 mb-2">
              Enroll &amp; Start
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Receive your acceptance letter and register before the June 30 deadline.
            </p>
          </div>
        </div>

        {/* Help Callout Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-400 px-5 py-4 text-sm text-gray-800 flex flex-wrap items-center justify-between gap-4">
          <span>Have questions about your application?</span>
          <Link
            to="/contact"
            className="text-blue-700 font-medium underline hover:text-blue-900"
          >
            Contact our admissions team →
          </Link>
        </div>
      </div>
    </section>
  );
}