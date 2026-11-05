
"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, User } from "lucide-react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="application" className="bg-[#f0f0e9] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#536b55]">
            Start Your Application
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#17231c] md:text-5xl">
            Let’s Find the Right Mortgage for You.
          </h2>

          <p className="max-w-md text-lg leading-8 text-[#4f574f]">
            Tell us a little about your home financing goals.
            We’ll help you explore the options that fit your needs.
          </p>

          <div className="mt-10 space-y-5 text-[#17231c]">
            <div className="flex items-center gap-3">
              <Mail className="text-[#536b55]" />
              <span className="text-base">Personalized mortgage guidance</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#536b55]" />
              <span className="text-base">A simple application process</span>
            </div>
            <div className="flex items-center gap-3">
              <User className="text-[#536b55]" />
              <span className="text-base">Support based on your goals</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#deded4] bg-white p-7 shadow-xl md:p-10">
          <h3 className="mb-2 text-2xl font-bold text-[#17231c]">
            Mortgage Inquiry Form
          </h3>

          <p className="mb-8 text-sm text-[#4f574f]">
            Complete the details below to get started.
          </p>

          {submitted ? (
            <div className="rounded-xl bg-[#eef2eb] p-6 text-center">
              <h4 className="text-xl font-bold text-[#17231c]">
                Thank You!
              </h4>
              <p className="mt-2 text-[#4f574f]">
                This is a design preview. Email submission is not connected yet.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17231c]">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-[#d6d8d0] px-4 py-3 text-[#17231c] outline-none focus:border-[#536b55]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17231c]">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-[#d6d8d0] px-4 py-3 text-[#17231c] outline-none focus:border-[#536b55]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17231c]">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-[#d6d8d0] px-4 py-3 text-[#17231c] outline-none focus:border-[#536b55]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17231c]">
                  Loan Program
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-[#d6d8d0] bg-white px-4 py-3 text-[#17231c] outline-none focus:border-[#536b55]"
                >
                  <option value="" disabled>Select a loan program</option>
                  <option>Conventional Loan</option>
                  <option>FHA Loan</option>
                  <option>VA Loan</option>
                  <option>Jumbo Loan</option>
                  <option>Refinance</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17231c]">
                  Estimated Property Price
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 300000"
                  className="w-full rounded-lg border border-[#d6d8d0] px-4 py-3 text-[#17231c] outline-none focus:border-[#536b55]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#17231c]">
                  Additional Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your goals..."
                  className="w-full resize-none rounded-lg border border-[#d6d8d0] px-4 py-3 text-[#17231c] outline-none focus:border-[#536b55]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#172d25] px-6 py-4 font-semibold text-white transition hover:bg-[#536b55]"
              >
                Submit Inquiry <ArrowRight size={19} />
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
