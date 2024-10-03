import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import { submitEmailForm } from "./api/emailService";
import Failure from "./components/failure";
import HeroSectionBase from "./components/heroSectionBase";
import InputForm from "./components/inputForm";
import Success from "./components/success";
import { ErrorResponse, FormData, ResponseComputedData } from "./types";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { mutate, isError, isSuccess, isPending, reset } = useMutation<
    ResponseComputedData,
    ErrorResponse,
    FormData
  >({
    mutationKey: ["deriveEmail"],
    mutationFn: (formData: FormData) => submitEmailForm(formData),
    onSuccess: (data) => {
      setEmail(data.email);
    },
    onError: (_error) => {
      setError(_error.message);
    },
  });

  const resetForm = () => {
    reset();
    setError("");
    setEmail("");
  };

  return (
    <div className="flex justify-center m-4 md:m-0 md:mt-[3rem]">
      <HeroSectionBase>
        {!isError && !isPending && !isSuccess && (
          <InputForm
            onSubmit={(formData: FormData) => mutate(formData)}
            isLoading={isPending}
          />
        )}
        {isSuccess && email && <Success email={email} resetForm={resetForm} />}
        {isError && error && <Failure error={error} resetForm={resetForm} />}
      </HeroSectionBase>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
}
