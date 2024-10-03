import { fireEvent, render, screen } from "@testing-library/react";

import Failure from "../failure";

describe("Failure Component", () => {
  const mockResetForm = jest.fn();

  it("renders the error message and button correctly", () => {
    const errorMessage = "An error occurred";
    render(<Failure error={errorMessage} resetForm={mockResetForm} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /try another email/i });
    expect(button).toBeInTheDocument();
  });

  it("calls resetForm when button is clicked", () => {
    render(<Failure error="An error occurred" resetForm={mockResetForm} />);

    const button = screen.getByRole("button", { name: /try another email/i });
    fireEvent.click(button);

    expect(mockResetForm).toHaveBeenCalledTimes(1);
  });
});
