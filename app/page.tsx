
import ApplicationForm from "./ApplicationForm";
import {
  House,
  ShieldCheck,
  HandCoins,
  Gem,
  RefreshCw,
  FileCheck,
  Hammer,
  Trees,
  ChartLine,
  ArrowUpRight,
  Mail,
  CheckCircle2,
} from "lucide-react";

import MortgageCalculator from "./MortgageCalculator";

const loans = [
  {
    name: "FHA Loans",
    number: "01",
    icon: House,
    description:
      "Flexible financing options designed to make homeownership more accessible.",
  },
  {
    name: "VA Home Loans",
    number: "02",
    icon: ShieldCheck,
    description:
      "Explore mortgage options available for eligible veterans and service members.",
  },
  {
    name: "DPA Loans",
    number: "03",
    icon: HandCoins,
    description:
      "Discover down payment assistance opportunities for qualified buyers.",
  },
  {
    name: "Jumbo Loans",
    number: "04",
    icon: Gem,
    description:
      "Financing solutions for properties that require larger loan amounts.",
  },
  {
    name: "Refinance",
    number: "05",
    icon: RefreshCw,
    description:
      "Explore refinancing options that align with your financial goals.",
  },
  {
    name: "Non-QM Loans",
    number: "06",
    icon: FileCheck,
    description:
      "Alternative mortgage solutions for unique financial situations.",
  },
  {
    name: "Rehab Loans",
    number: "07",
    icon: Hammer,
    description:
      "Financing options for purchasing and improving a property.",
  },
  {
    name: "USDA Loans",
    number: "08",
    icon: Trees,
    description:
      "Explore eligible rural and suburban home financing options.",
  },
  {
    name: "Adjustable-Rate Loans",
    number: "09",
    icon: ChartLine,
    description:
      "Learn about mortgage options with adjustable interest rates.",
  },
];

const blogs = [
  {
    category: "FHA LOANS",
    title: "FHA Loan Requirements: What Buyers Should Know",
    description:
      "Understand the basics of FHA financing and prepare for your home buying journey.",
    image: "photo-1560518883-ce09059eeffa",
    read: "5 MIN READ",
  },
  {
    category: "FIRST TIME BUYERS",
    title: "Your Guide to Buying Your First Home",
    description:
      "Explore the important steps that bring you closer to owning your first home.",
    image: "photo-1600596542815-ffad4c1539a9",
    read: "7 MIN READ",
  },
  {
    category: "CREDIT TIPS",
    title: "Building a Stronger Financial Future",
    description:
      "Learn how credit and financial preparation can support your mortgage journey.",
    image: "photo-1600607687939-ce8a6c25118c",
    read: "4 MIN READ",
  },
];

const benefits = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Guidance That Matters",
    text: "Understand your mortgage options with personalized guidance throughout the process.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "A Personal Approach",
    text: "Every homeownership journey is different. Your financing experience should reflect that.",
  },
  {
    number: "03",
    icon: ArrowUpRight,
    title: "Here For Your Goals",
    text: "Dedicated support to help you explore solutions that fit your needs.",
  },
];

const faqs = [
  "What is the first step in the mortgage process?",
  "How much down payment is required?",
  "What is the difference between fixed-rate and adjustable-rate mortgages?",
  "How is my credit score affected by applying for a mortgage?",
  "What documents do I need to apply for a mortgage?",
];

const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#202820]">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-[#202820]/10 bg-[#f7f7f2]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#home" className="text-2xl font-black tracking-[-2px]">
            SPENCER<span className="text-[#82947b]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#596257] lg:flex">
            <a href="#home" className="transition hover:text-[#82947b]">
              Home
            </a>
            <a href="#about" className="transition hover:text-[#82947b]">
              About
            </a>
            <a href="#loans" className="transition hover:text-[#82947b]">
              Loan Programs
            </a>
            <a href="#blog" className="transition hover:text-[#82947b]">
              Insights
            </a>
            <a href="#contact" className="transition hover:text-[#82947b]">
              Contact
            </a>
          </div>

          <a
            href="#application"
            className="inline-flex items-center gap-2 rounded-full bg-[#263b2c] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#536b55] md:px-7"
          >
            Get Started <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_.95fr]">
          <div className="reveal-up relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#82947b]" />
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#536b55]">
                Spencer Bangert Mortgage
              </p>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-3px] sm:text-6xl lg:text-7xl">
              Your next chapter
              <span className="block font-serif font-normal italic text-[#82947b]">
                starts at home.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#737a70] md:text-lg">
              Finding the right home loan should feel exciting, not
              overwhelming. Explore your options with personalized mortgage
              guidance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#application"
                className="inline-flex items-center gap-2 rounded-full bg-[#263b2c] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#263b2c]/10 transition hover:-translate-y-1 hover:bg-[#536b55]"
              >
                Start Your Journey <ArrowUpRight size={17} />
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#263b2c]/20 px-8 py-4 text-sm font-semibold transition hover:bg-[#e9ece3]"
              >
                Discover More
              </a>
            </div>

            <div className="mt-14 flex items-center gap-5 border-t border-[#263b2c]/10 pt-7">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-[#f7f7f2] bg-[#c6d0bd]" />
                <div className="h-10 w-10 rounded-full border-2 border-[#f7f7f2] bg-[#a6b39b]" />
                <div className="h-10 w-10 rounded-full border-2 border-[#f7f7f2] bg-[#d9c9ac]" />
              </div>

              <div>
                <p className="text-sm font-bold">Personalized service</p>
                <p className="text-xs text-[#777d73]">
                  A mortgage experience centered on you
                </p>
              </div>
            </div>
          </div>

          <div className="relative reveal-up">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#dfe5d8] blur-3xl" />

            <div className="image-zoom relative overflow-hidden rounded-[2rem] bg-[#dfe5d8]">
              <img
                src={photo("photo-1600596542815-ffad4c1539a9", 1200)}
                alt="Beautiful modern home exterior"
                className="h-[420px] w-full object-cover md:h-[570px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17251b]/70 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white md:bottom-10 md:left-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#d7e2d1]">
                  Your Mortgage Partner
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Spencer Bangert
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Division Sales Manager · NMLS# 1202142
                </p>
              </div>
            </div>

            <div className="float-slow absolute -bottom-7 -left-3 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur md:-left-10">
              <p className="text-3xl font-semibold text-[#536b55]">12+</p>
              <p className="mt-1 text-xs font-medium text-[#737a70]">
                Years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-[#263b2c]/10 bg-[#eeeee5]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-9 text-center sm:grid-cols-3 md:px-10">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#536b55]">
            Personalized Guidance
          </p>
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#536b55]">
            Mortgage Solutions
          </p>
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#536b55]">
            Your Goals First
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 md:px-10 lg:grid-cols-2 lg:py-32"
      >
        <div className="relative">
          <div className="image-zoom overflow-hidden rounded-[2rem]">
            <img
              src={photo("photo-1600607687920-4e2a09cf159d", 1000)}
              alt="Bright modern home interior"
              className="h-[390px] w-full object-cover md:h-[520px]"
            />
          </div>

          <div className="absolute -bottom-7 -right-3 rounded-2xl bg-[#263b2c] p-7 text-white shadow-xl md:-right-8">
            <p className="text-4xl font-semibold">4,000+</p>
            <p className="mt-2 text-xs text-white/70">Individual loans</p>
          </div>
        </div>

        <div className="pt-5">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#82947b]">
            A little about me
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-2px] md:text-5xl">
            More than a mortgage.
            <span className="block font-serif font-normal italic text-[#82947b]">
              A relationship built on trust.
            </span>
          </h2>

          <p className="mt-7 text-base leading-8 text-[#737a70]">
            With years of experience in the mortgage industry, I have helped
            families move closer to their dream of homeownership. My goal is to
            make every step of the loan process simple and stress free.
          </p>

          <p className="mt-4 text-base leading-8 text-[#737a70]">
            Whether you are buying your first home or exploring refinancing, I
            believe in clear communication, personal attention and helping you
            understand your options.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#263b2c] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#536b55]"
          >
            Let&apos;s Connect <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* LOAN PROGRAMS */}
      <section
        id="loans"
        className="bg-[#e9ece3] px-5 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#82947b]">
                Explore Your Options
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-2px] md:text-5xl">
                A loan for your
                <span className="font-serif font-normal italic text-[#536b55]">
                  {" "}
                  next move.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#737a70]">
              Every buyer has a different story. Explore mortgage programs and
              discover which options may suit your goals.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loans.map((loan) => (
              <article
                key={loan.name}
                className="premium-card group rounded-[1.5rem] border border-[#263b2c]/10 bg-[#f7f7f2] p-7 md:p-8"
              >
                <div className="mb-9 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5eade] text-[#536b55] transition group-hover:rotate-6 group-hover:bg-[#263b2c] group-hover:text-white">
                    <loan.icon size={28} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-bold tracking-[2px] text-[#a3aa9e]">
                    {loan.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{loan.name}</h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#737a70]">
                  {loan.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#536b55] transition group-hover:gap-4"
                >
                  Explore Program <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-[#f7f7f2] px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#82947b]">
              Plan With Confidence
            </p>

            <h2 className="text-4xl font-semibold tracking-[-2px] md:text-5xl">
              Make the numbers work for you.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#737a70]">
              Explore an estimated monthly mortgage payment using our
              calculator.
            </p>
          </div>

          <MortgageCalculator />
        </div>
      </section>

      {/* APPLICATION FORM */}
      <ApplicationForm />

      {/* WHY CHOOSE US */}
      <section className="bg-[#263b2c] px-5 py-24 text-white md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#b6c7aa]">
              The Spencer Experience
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-2px] md:text-5xl">
              A little more personal.
              <span className="block font-serif font-normal italic text-[#b6c7aa]">
                A lot more thoughtful.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.number}
                className="premium-card group rounded-[1.5rem] border border-white/15 bg-white/[0.06] p-8 backdrop-blur"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#b6c7aa] transition group-hover:rotate-6 group-hover:bg-white/20">
                    <item.icon size={32} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs tracking-[2px] text-white/40">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#82947b]">
                The Journal
              </p>

              <h2 className="text-4xl font-semibold tracking-[-2px] md:text-5xl">
                Ideas for your next chapter.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#737a70]">
              Helpful perspectives on mortgages, credit and the journey to
              homeownership.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="premium-card group overflow-hidden rounded-[1.5rem] bg-white shadow-sm"
              >
                <div className="image-zoom relative h-60">
                  <img
                    src={photo(blog.image, 800)}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-[#f7f7f2]/90 px-4 py-2 text-[10px] font-bold tracking-[1px] text-[#536b55] backdrop-blur">
                    {blog.category}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-[10px] font-bold tracking-[2px] text-[#9aa294]">
                    {blog.read}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold leading-snug">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#737a70]">
                    {blog.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#536b55] transition group-hover:gap-4"
                  >
                    Read More <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION CTA */}
      <section
        id="application"
        className="px-5 pb-24 md:px-10 md:pb-32"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#dfe5d8] px-7 py-20 text-center md:px-16 md:py-28">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[45px] border-white/30" />
          <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full border-[45px] border-white/30" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#536b55]">
              Your Next Chapter Awaits
            </p>

            <h2 className="text-4xl font-semibold tracking-[-2px] md:text-6xl">
              Ready to find your
              <span className="block font-serif font-normal italic text-[#536b55]">
                place in the world?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#596257]">
              Take the first step toward your homeownership goals. Let&apos;s
              talk about the possibilities.
            </p>

            <a
              href="#application"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#263b2c] px-9 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#536b55]"
            >
              Start Your Application <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#eeeee5] px-5 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#82947b]">
              Good To Know
            </p>

            <h2 className="text-4xl font-semibold tracking-[-2px] md:text-5xl">
              Questions?
              <span className="block font-serif font-normal italic text-[#536b55]">
                We have answers.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#737a70]">
              Buying a home can bring up a lot of questions. Here are a few
              helpful starting points.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#263b2c]/20 px-6 py-3 text-sm font-semibold transition hover:bg-white"
            >
              Ask a Question <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((question) => (
              <details
                key={question}
                className="group rounded-2xl border border-[#263b2c]/10 bg-[#f7f7f2] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold md:text-base">
                  {question}

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5eade] text-lg text-[#536b55] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#737a70]">
                  Every mortgage situation is different. Contact Spencer to
                  discuss your questions and understand the available options
                  for your circumstances.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#82947b]">
              Let&apos;s Talk
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-2px] md:text-6xl">
              Your home journey
              <span className="block font-serif font-normal italic text-[#82947b]">
                starts with a conversation.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#737a70]">
              Have questions about your mortgage options? Reach out and take
              the next step with confidence.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#263b2c] p-8 text-white md:p-12">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b6c7aa]">
              Get In Touch
            </p>

            <h3 className="mt-5 text-3xl font-semibold">
              Spencer Bangert
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Division Sales Manager · NMLS# 1202142
            </p>

            <div className="my-8 h-px bg-white/15" />

            <p className="text-xs uppercase tracking-[2px] text-white/50">
              Email
            </p>

            <div className="mt-3 flex items-center gap-3">
              <Mail size={20} className="shrink-0 text-[#b6c7aa]" />

              <a
                href="mailto:spencer@fdmhome.com"
                className="break-all text-lg font-medium transition hover:text-[#b6c7aa]"
              >
                spencer@fdmhome.com
              </a>
            </div>

            <a
              href="mailto:spencer@fdmhome.com"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#dfe5d8] px-7 py-4 text-sm font-bold text-[#263b2c] transition hover:-translate-y-1 hover:bg-white"
            >
              Send an Email <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1d2b21] px-5 pb-8 pt-16 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
          <div>
            <a
              href="#home"
              className="text-3xl font-black tracking-[-2px]"
            >
              SPENCER<span className="text-[#a7b99d]">.</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              Personalized mortgage solutions and dedicated service for your
              homeownership journey.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Explore</h3>

            <div className="flex flex-col gap-3 text-sm text-white/50">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#loans" className="transition hover:text-white">
                Loan Programs
              </a>
              <a href="#blog" className="transition hover:text-white">
                Insights
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold">Contact</h3>

            <a
              href="mailto:spencer@fdmhome.com"
              className="text-sm text-white/50 transition hover:text-white"
            >
              spencer@fdmhome.com
            </a>

            <p className="mt-4 text-sm text-white/50">
              Spencer Bangert
            </p>

            <p className="mt-2 text-sm text-white/50">
              NMLS# 1202142
            </p>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-7 text-xs text-white/40 md:flex-row">
          <p>© 2026 Spencer Bangert. All Rights Reserved.</p>

          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
