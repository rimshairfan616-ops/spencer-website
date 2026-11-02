
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

  const payment = monthlyRate === 0
    ? principal / months
    : principal * monthlyRate *
      Math.pow(1 + monthlyRate, months) /
      (Math.pow(1 + monthlyRate, months) - 1);

  const money = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-800 font-bold mb-4">
            MORTGAGE CALCULATOR
          </p>

          <h2 className="text-4xl font-bold mb-5">
            Calculate Your Monthly Payment
          </h2>

          <p className="text-gray-600">
            Adjust the values to get an estimated monthly
            principal and interest payment.
          </p>
        </div>

        <div className="bg-slate-100 p-8 md:p-10 rounded-3xl space-y-7">

          <div>
            <label className="font-semibold block mb-2">
              Home Price: {money(price)}
            </label>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="5000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-blue-900"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Down Payment: {money(down)}
            </label>
            <input
              type="range"
              min="0"
              max={price}
              step="1000"
              value={Math.min(down, price)}
              onChange={(e) => setDown(Number(e.target.value))}
              className="w-full accent-blue-900"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Interest Rate: {rate}%
            </label>
            <input
              type="range"
              min="1"
              max="15"
              step="0.25"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-blue-900"
            />
          </div>

          <div>
            <label className="font-semibold block mb-2">
              Loan Term
            </label>
            <select
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300 bg-white"
            >
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="30">30 Years</option>
            </select>
          </div>

          <div className="bg-blue-950 text-white p-7 rounded-2xl">
            <p className="text-blue-200 text-sm mb-2">
              Estimated Monthly Payment
            </p>

            <h3 className="text-4xl font-bold">
              {money(payment)}
            </h3>

            <p className="text-blue-200 text-xs mt-3">
              Principal and interest only. Taxes, insurance
              and other costs are not included.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
