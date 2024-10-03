import React from "react";

import FailureIcon from "../../../assets/failure.svg";

export default function Failure({
  error,
  resetForm,
}: {
  error: string;
  resetForm: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={FailureIcon} alt="success" className="w-[123px] h-[123px]" />
      <p className="font-[400] md:text-[2rem] text-[#121212] my-[3.75rem] leading-11 text-center">
        {error}
      </p>
      <div className="flex justify-center items-center w-full">
        <button
          type="submit"
          className="w-full bg-[#FF7A03] font-[600] md:text-[1.125rem] text-[#FAFAFB] py-2 px-4 rounded-[0.75rem]
                    shadow-md leading-[2rem] hover:bg-[#FA9D3E] transition duration-300"
          onClick={resetForm}
        >
          Try Another Email
        </button>
      </div>
    </div>
  );
}
