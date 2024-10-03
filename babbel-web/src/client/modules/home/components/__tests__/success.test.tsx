import { fireEvent, render, screen } from "@testing-library/react";

import Success from "../success";

test("renders Success component and copies email", () => {
  const resetForm = jest.fn();
  const email = "john.doe@example.com";

  render(<Success email={email} resetForm={resetForm} />);

  expect(screen.getByText(email)).toBeInTheDocument();

  const copyIcon = screen.getByRole("button");
  fireEvent.click(copyIcon);

  const resetButton = screen.getByText(/Try Another Email/i);
  fireEvent.click(resetButton);

  expect(resetForm).toHaveBeenCalled();
});
