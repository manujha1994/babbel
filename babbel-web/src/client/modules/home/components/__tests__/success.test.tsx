import { fireEvent, render, screen } from "@testing-library/react";

import Success from "../success";

beforeEach(() => {
  Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn().mockResolvedValue(undefined),
    },
  });
});

test("renders Success component and copies email", () => {
  const resetForm = jest.fn();
  const email = "john.doe@example.com";

  render(<Success email={email} resetForm={resetForm} />);

  expect(screen.getByText(email)).toBeInTheDocument();

  const copyIcon = screen.getByTestId("copy-icon");
  fireEvent.click(copyIcon);

  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(email);

  const resetButton = screen.getByTestId("reset-button");
  fireEvent.click(resetButton);

  expect(resetForm).toHaveBeenCalled();
});
