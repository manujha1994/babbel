import { Outlet } from "react-router-dom";

import BabbelLogo from "../../assets/babbelLogo.svg";
import BabbelLogoSmall from "../../assets/babbelSmallLogo.svg";
import { LayoutProps } from "./types";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-cover bg-center h-screen bg-hero-pattern">
      <div className="flex justify-center pt-[2rem]">
        <img src={BabbelLogo} alt="babbel logo" className="hidden md:flex" />
        <img
          src={BabbelLogoSmall}
          alt="babbel logo"
          className="flex md:hidden"
        />
      </div>
      <Outlet />
      {children}
    </div>
  );
}
