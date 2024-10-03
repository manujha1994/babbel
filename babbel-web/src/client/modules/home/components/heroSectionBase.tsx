import { ReactNode } from "react";

export interface HeroSectionBaseProps {
  children?: ReactNode;
}

export default function HeroSectionBase({ children }: HeroSectionBaseProps) {
  return (
    <div
      className="flex justify-center items-center rounded-[2.5rem] bg-[#FFD866] px-4 py-6 md:p-[3.75rem] w-[590px] h-auto"
      data-testid="hero-section"
    >
      {children}
    </div>
  );
}
