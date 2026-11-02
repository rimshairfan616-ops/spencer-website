import MortgageCalculator from "./MortgageCalculator";
const loans = [
  "FHA Loans",
  "VA Home Loans",
  "DPA Loans",
  "Jumbo Loans",
  "Refinance",
  "Non-QM Loans",
  "Rehab Loans",
  "USDA Loans",
  "Adjustable-Rate Loans",
];

const blogs = [
  {
    category: "FHA LOANS",
    title: "FHA Loan Requirements: What Buyers Should Know",
    description: "Understand the basics of FHA financing and home buying.",
  },
  {
    category: "FIRST TIME BUYERS",
    title: "Your Guide to Buying Your First Home",
    description: "Explore important steps on your homeownership journey.",
  },
  {
    category: "CREDIT TIPS",
    title: "Building a Stronger Financial Future",
    description: "Learn about credit and preparing for a mortgage.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-extrabold tracking-tight text-blue-900">
            SPENCER.
          </h1>

          <div className="hidden lg:flex items-center gap-9 text-sm font-medium">
            <a href="#home" className="hover:text-blue-700">Home</a>
            <a href="#about" className="hover:text-blue-700">About Me</a>
            <a href="#loans" className="hover:text-blue-700">Loan Programs</a>
            <a href="#blog" className="hover:text-blue-700">Blog</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>

          <a href="#application"
            className="bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition">
            Get Started
          </a>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-blue-800 font-bold text-sm tracking-wide mb-6">
                WELCOME TO SPENCER BANGERT MORTGAGE
              </p>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-7">
                Your Senior{" "}
                <span className="text-blue-900">Loan Officer</span>
              </h2>

              <p className="text-gray-600 text-lg leading-8 max-w-xl mb-9">
                Whether you are buying a new home or refinancing,
                I provide personalized, dedicated service with
                a focus on making your loan process easy and stress free.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#application"
                  className="bg-blue-900 text-white px-7 py-4 rounded-lg font-semibold hover:bg-blue-800 transition">
                  Start Application
                </a>

                <a href="#contact"
                  className="border border-blue-900 text-blue-900 px-7 py-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition">
                  Quick Contact
                </a>
              </div>
            </div>

            {/* PROFILE IMAGE PLACEHOLDER */}
            <div className="bg-blue-900 rounded-3xl min-h-[420px] flex flex-col items-center justify-center p-10 text-white">

              <div className="w-48 h-48 rounded-full border-2 border-dashed border-blue-200 bg-white/10 flex items-center justify-center mb-7">
                <span className="text-blue-200 text-sm">
                  Profile Image
                </span>
              </div>

              <h3 className="text-3xl font-bold">
                Spencer Bangert
              </h3>

              <p className="text-blue-100 mt-3">
                Division Sales Manager
              </p>

              <p className="text-blue-200 text-sm mt-2">
                NMLS# 1202142
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-blue-800 font-bold text-sm mb-4">
              WHO WE ARE
            </p>

            <h2 className="text-4xl font-bold leading-tight mb-6">
              Making An Impact In Our Local Communities.
            </h2>

            <p className="text-gray-600 leading-8 mb-7">
              With years of experience in the mortgage industry,
              I have helped families move closer to their dream
              of homeownership. My goal is to make every step
              of the loan process simple and stress free.
            </p>

            <a href="#contact"
              className="inline-block bg-blue-900 text-white px-7 py-4 rounded-lg font-semibold hover:bg-blue-800">
              Contact Spencer
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-100 rounded-2xl p-9 text-center">
              <h3 className="text-4xl font-bold text-blue-900">12+</h3>
              <p className="text-gray-600 mt-3 text-sm">
                Years of Serving Our Customers
              </p>
            </div>

            <div className="bg-blue-900 rounded-2xl p-9 text-center text-white">
              <h3 className="text-4xl font-bold">4,000+</h3>
              <p className="text-blue-100 mt-3 text-sm">
                Individual Loans
              </p>
            </div>

            <div className="col-span-2 bg-slate-100 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900">
                Prefer To Meet One on One?
              </h3>
              <p className="text-gray-600 mt-2">
                Schedule A Consultation Today!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LOAN PROGRAMS */}
      <section id="loans" className="bg-slate-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-800 font-bold text-sm mb-4">
              LOAN PROGRAMS
            </p>

            <h2 className="text-4xl font-bold mb-5">
              Find Your Perfect Mortgage Solution
            </h2>

            <p className="text-gray-600 leading-7">
              Explore loan options designed to meet your
              financial needs and homeownership goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {loans.map((loan, index) => (
              <div key={loan}
                className="bg-white rounded-2xl p-9 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">

                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl text-blue-900 mb-6">
                  {index % 3 === 0 ? "⌂" : index % 3 === 1 ? "◇" : "▣"}
                </div>

                <h3 className="text-xl font-bold mb-5">
                  {loan}
                </h3>

                <a href="#contact"
                  className="text-blue-900 font-semibold hover:underline">
                  Learn More →
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>
      <MortgageCalculator />

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-blue-800 font-bold text-sm mb-4">
              OUR COMMITMENT
            </p>

            <h2 className="text-4xl font-bold">
              A Team You Can Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Guide From Experience",
                text: "Personalized guidance to help you understand your mortgage options.",
              },
              {
                title: "Deliver Unparalleled Value",
                text: "Explore loan choices with dedicated and professional service.",
              },
              {
                title: "We Never Quit",
                text: "Committed to finding solutions for your homeownership goals.",
              },
            ].map((item) => (
              <div key={item.title}
                className="border border-gray-200 rounded-2xl p-9 hover:shadow-lg transition">

                <div className="text-4xl text-blue-900 mb-6">✦</div>

                <h3 className="text-xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="bg-slate-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-wrap justify-between items-end gap-5 mb-12">
            <div>
              <p className="text-blue-800 font-bold text-sm mb-4">
                OUR BLOG
              </p>
              <h2 className="text-4xl font-bold">
                Latest Insights
              </h2>
              <p className="text-gray-600 mt-3">
                Expert advice on mortgages and home buying.
              </p>
            </div>

            <a href="#contact" className="text-blue-900 font-semibold">
              View All Posts →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <article key={blog.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">

                <div className="h-48 bg-gradient-to-br from-blue-200 to-slate-300 flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-2xl">
                    SPENCER.
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-blue-800 text-xs font-bold mb-4">
                    {blog.category}
                  </p>

                  <h3 className="text-xl font-bold mb-4">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-7 mb-5">
                    {blog.description}
                  </p>

                  <a href="#contact"
                    className="text-blue-900 font-semibold">
                    Read More →
                  </a>
                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATION SECTION */}
      <section id="application" className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-blue-950 rounded-3xl p-10 md:p-16 text-center text-white">

          <p className="text-blue-200 font-bold text-sm mb-5">
            START YOUR JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Application
          </h2>

          <p className="text-blue-100 leading-7 max-w-xl mx-auto mb-9">
            Get started on your home loan journey today.
            Take the next step towards your homeownership goals.
          </p>

          <a href="#contact"
            className="inline-block bg-white text-blue-950 px-9 py-4 rounded-lg font-bold hover:bg-blue-100 transition">
            Get Started Now →
          </a>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-100 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-blue-800 font-bold text-sm mb-4">
              FAQ
            </p>

            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">

            {[
              "What is the first step in the mortgage process?",
              "How much down payment is required?",
              "What is the difference between fixed-rate and adjustable-rate mortgages?",
              "How is my credit score affected by applying for a mortgage?",
              "What documents do I need to apply for a mortgage?",
            ].map((question) => (
              <details key={question}
                className="bg-white rounded-xl p-6 shadow-sm group">

                <summary className="font-semibold cursor-pointer flex justify-between gap-4 list-none">
                  {question}
                  <span className="text-blue-900 text-xl">+</span>
                </summary>

                <p className="text-gray-600 leading-7 mt-5">
                  Every mortgage situation is different.
                  Contact Spencer to discuss your questions
                  and understand the available options.
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-800 font-bold text-sm mb-4">
            LET'S CONNECT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Apply For Your Home Loan?
          </h2>

          <p className="text-gray-600 mb-9">
            Let's make your homeownership dream a reality.
          </p>

          <a href="mailto:spencer@fdmhome.com"
            className="inline-block bg-blue-900 text-white px-9 py-4 rounded-lg font-semibold hover:bg-blue-800 transition">
            Contact Spencer
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-14 pb-8 px-6 md:px-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 pb-12">

          <div>
            <h2 className="text-2xl font-bold mb-5">
              SPENCER.
            </h2>
            <p className="text-gray-400 leading-7 text-sm">
              Personalized mortgage solutions and dedicated
              service for your homeownership journey.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-5">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About Me</a>
              <a href="#loans" className="hover:text-white">Loan Programs</a>
              <a href="#blog" className="hover:text-white">Blog</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-5">Contact</h3>
            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <a href="mailto:spencer@fdmhome.com">
                spencer@fdmhome.com
              </a>
              <p>Spencer Bangert</p>
              <p>NMLS# 1202142</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-7 text-center text-gray-500 text-sm">
          © 2026 Spencer Bangert. All Rights Reserved.
        </div>

      </footer>

    </main>
  );
}
