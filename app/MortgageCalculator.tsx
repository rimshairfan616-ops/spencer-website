
"use client";

import { useState } from "react";

export default function MortgageCalculator() {
  const [price, setPrice] = useState(300000);
  const [down, setDown] = useState(60000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const principal = Math.max(0, price - down);
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  const payment =
    monthlyRate === 0
      ? principal / months
      : (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const money = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="bg-[#f7f7f2] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 font-bold tracking-[0.2em] text-[#536b55]">
            MORTGAGE CALCULATOR
          </p>

          <h2 className="mb-5 text-4xl font-bold leading-tight text-[#202820] md:text-5xl">
            Calculate Your Monthly Payment
          </h2>

          <p className="max-w-md leading-8 text-[#777d73]">
            Adjust the values to get an estimated monthly
            principal and interest payment.
          </p>

          <div className="mt-8 h-1 w-20 rounded-full bg-[#82947b]" />
        </div>

        {/* Calculator Card */}
        <div className="space-y-7 rounded-3xl border border-[#e3e5dc] bg-[#eeeee5] p-8 shadow-[0_20px_60px_rgba(32,40,32,0.08)] md:p-10">

          {/* Home Price */}
          <div>
            <div className="mb-3 flex justify-between gap-3">
              <label className="font-semibold text-[#202820]">
                Home Price
              </label>
              <span className="font-bold text-[#536b55]">
                {money(price)}
              </span>
            </div>

            <input
              type="range"
              min="50000"
              max="1000000"
              step="5000"
              value={price}
              onChange={(e) => {
                const newPrice = Number(e.target.value);
                setPrice(newPrice);
                setDown((previous) => Math.min(previous, newPrice));
              }}
              className="w-full cursor-pointer accent-[#536b55]"
            />
          </div>

          {/* Down Payment */}
          <div>
            <div className="mb-3 flex justify-between gap-3">
              <label className="font-semibold text-[#202820]">
                Down Payment
              </label>
              <span className="font-bold text-[#536b55]">
                {money(down)}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={price}
              step="1000"
              value={Math.min(down, price)}
              onChange={(e) => setDown(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#536b55]"
            />
          </div>

          {/* Interest Rate */}
          <div>
            <div className="mb-3 flex justify-between gap-3">
              <label className="font-semibold text-[#202820]">
                Interest Rate
              </label>
              <span className="font-bold text-[#536b55]">
                {rate}%
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="15"
              step="0.25"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#536b55]"
            />
          </div>

          {/* Loan Term */}
          <div>
            <label className="mb-3 block font-semibold text-[#202820]">
              Loan Term
            </label>

            <select
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full rounded-xl border border-[#d5dace] bg-[#f7f7f2] p-4 text-[#202820] outline-none transition focus:border-[#536b55] focus:ring-2 focus:ring-[#82947b]/30"
            >
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="30">30 Years</option>
            </select>
          </div>

          {/* Monthly Payment Result */}
          <div className="rounded-2xl bg-[#536b55] p-7 text-white shadow-lg">
            <p className="mb-3 text-sm font-medium tracking-wide text-[#e0e8dc]">
              ESTIMATED MONTHLY PAYMENT
            </p>

            <h3 className="text-4xl font-bold md:text-5xl">
              {money(payment)}
            </h3>

            <div className="my-5 h-px bg-white/20" />

            <p className="text-xs leading-6 text-[#e0e8dc]">
              Principal and interest only. Taxes, insurance
              and other costs are not included.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
