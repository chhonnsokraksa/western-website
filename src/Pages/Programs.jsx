export default function Programs() {
  return (
    <section className="w-full bg-gray-100 py-12 flex-1">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-[#163462] mb-6">
          Programs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-[#163462] mb-2">
              Technology
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Computer Science, web development, and networking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-[#163462] mb-2">
              Design
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              UX/UI design, graphic design, and digital media.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-[#163462] mb-2">
              Business
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Management, marketing, and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}