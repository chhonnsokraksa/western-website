import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="w-full bg-[#163462] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-3">Learn. Build. Lead.</h1>
          <p className="text-gray-200 max-w-xl mb-6">
            Western University offers practical degrees in technology, design, and business.
          </p>
          <Link
            to="/programs"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-blue-950 font-semibold text-sm px-5 py-2.5 rounded"
          >
            Explore programs
          </Link>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section className="w-full bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          {/* Why Western? */}
          <div>
            <h2 className="text-xl font-bold text-[#163462] mb-4">
              Why Western?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-[#163462] mb-2">
                  Hands-on learning
                </h3>
                <p className="text-gray-600 text-sm">
                  Small classes and real projects from the first semester.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-[#163462] mb-2">
                  Supportive community
                </h3>
                <p className="text-gray-600 text-sm">
                  Mentors, study groups, and student clubs for every interest.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-base font-bold text-[#163462] mb-2">
                  Career ready
                </h3>
                <p className="text-gray-600 text-sm">
                  Internships with local employers and a dedicated careers office.
                </p>
              </div>
            </div>
          </div>

          {/* Key dates */}
          <div>
            <h2 className="text-xl font-bold text-[#163462] mb-3">
              Key dates
            </h2>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-6">
              <li>Applications open: January 15</li>
              <li>Open day: March 8</li>
              <li>Application deadline: June 30</li>
            </ul>

            {/* Callout Banner */}
            <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 text-sm text-gray-800 max-w-3xl">
              Ready to start? Go to{" "}
              <Link to="/admissions" className="text-blue-700 underline hover:text-blue-900">
                Admissions
              </Link>
              .
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}