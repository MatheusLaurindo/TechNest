import { ReactNode } from "react";

interface INavbar {
  logo: string;
  name: string;
  mainContent?: ReactNode;
  endContent?: ReactNode;
}

export default function Navbar({
  logo,
  name,
  mainContent,
  endContent,
}: INavbar) {
  return (
    <nav className="w-full bg-slate-800 h-16 flex justify-between gap-4 p-3">
      <div className="flex items-center">
        <img src={logo} className="h-16 p-3" alt="" />
        <span className="font-bold text-2xl text-white">{name}</span>
      </div>
      <div className="flex">{mainContent}</div>
      <div className="flex items-center p-3 text-slate-200">{endContent}</div>
    </nav>
  );
}
