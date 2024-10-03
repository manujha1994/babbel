import { fireEvent, render, screen } from "@testing-library/react";

import InputForm from "../inputForm";

test("renders InputForm and submits data correctly", () => {
  const onSubmit = jest.fn();
  render(<InputForm onSubmit={onSubmit} isLoading={false} />);

  const fullNameInput = screen.getByLabelText(/Full Name/i);
  const domainInput = screen.getByLabelText(/Company Email Domain/i);
  fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
  fireEvent.change(domainInput, { target: { value: "example.com" } });

  const submitButton = screen.getByText(/Submit/i);
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({
    fullName: "John Doe",
    domain: "example.com",
  });
});
