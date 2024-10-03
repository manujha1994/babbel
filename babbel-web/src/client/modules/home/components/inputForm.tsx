import React, { useState } from "react";
import { toast } from "react-toastify";

import { FormInput } from "../types";

export default function InputForm({ onSubmit, isLoading }: FormInput) {
  const [fullName, setFullName] = useState("");
  const [domain, setDomain] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameRegex.test(fullName)) {
      toast.error(
        "Full name must be in 'FirstName LastName' format without special characters.",
      );
      return;
    }

    const domainRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(`${fullName.replace(" ", ".")}@${domain}`)) {
      toast.error("Please enter a valid email domain (e.g., example.com).");
      return;
    }

    onSubmit({ fullName, domain });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="font-[500] text-[#121212] md:text-[1.75rem] mb-6 md:leading-[2.75rem]">
        Enter your full name and company to receive your company-formatted
        email!
      </p>

      <div>
        <label htmlFor="fullName" className="font-[400] text-[#522700]">
          Full Name
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            className="w-full my-2 p-2 border border-gray-300 rounded-[0.75rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
            required
            disabled={isLoading}
          />
        </label>
      </div>

      <div>
        <label htmlFor="domain" className="font-[400] text-[#522700]">
          Company Email Domain
          <input
            id="domain"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="example.com"
            className="w-full mt-2 mb-3 p-2 border border-gray-300 rounded-[0.75rem] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoComplete="off"
            required
            disabled={isLoading}
          />
        </label>
      </div>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className={`w-full bg-[#FF7A03] font-[600] text-[1.125rem] text-[#FAFAFB] py-2 px-4 rounded-[0.75rem]
                    shadow-md leading-[2rem] hover:bg-[#FA9D3E] transition duration-300
                    ${isLoading ? "cursor-not-allowed opacity-75" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? <span className="loader" /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
