import { render, screen } from "@testing-library/react";

import HeroSectionBase from "../heroSectionBase";

describe("HeroSectionBase Component", () => {
  it("renders its children correctly", () => {
    const childText = "This is a child component";
    render(
      <HeroSectionBase>
        <p>{childText}</p>
      </HeroSectionBase>,
    );

    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it("has the correct class applied", () => {
    render(
      <HeroSectionBase>
        <p>Test content</p>
      </HeroSectionBase>,
    );

    const heroSection = screen.getByTestId("hero-section");

    expect(heroSection).toHaveClass(
      "flex justify-center items-center rounded-[2.5rem] bg-[#FFD866] px-4 py-6 md:p-[3.75rem] w-[590px] h-auto",
    );
  });
});
