import React from "react";
import { toast } from "react-toastify";

import SuccessIcon from "../../../assets/success.svg";
import { CopyIcon } from "../../../ui-library/icons/HomeIcons";

export default function Success({
  email,
  resetForm,
}: {
  email: string;
  resetForm: () => void;
}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email id copied");
    });
  };

  return (
    <div className="flex flex-col">
      <img src={SuccessIcon} alt="success" />
      <p className="font-[400] md:text-[1.5rem] text-[#121212]">
        Here’s your official email id:
      </p>
      <div className="max-w-[27rem] overflow-x-auto gap-3 flex bg-[#F6CB4D] rounded-[0.75rem] px-[0.625rem] py-[1rem] my-4 justify-center items-center">
        <p className="font-[400] md:text-[1.5rem] text-[#121212] leading-[2.5rem]">
          {email}
        </p>
        <div
          role="button"
          tabIndex={0}
          className="cursor-pointer"
          onClick={handleCopy}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCopy();
            }
          }}
          data-testid="copy-icon"
          aria-label="Copy email"
        >
          <CopyIcon />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <button
          type="submit"
          className="w-full bg-[#FF7A03] font-[600] md:text-[1.125rem] text-[#FAFAFB] py-2 px-4 rounded-[0.75rem]
                    shadow-md leading-[2rem] hover:bg-[#FA9D3E] transition duration-300"
          onClick={resetForm}
          data-testid="reset-button"
        >
          Try Another Email
        </button>
      </div>
    </div>
  );
}
