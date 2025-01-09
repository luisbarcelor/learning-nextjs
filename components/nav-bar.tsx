import React from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";

const NavBar = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with food on it"/>
        NextLevel Food
      </Link>
      
      <nav>
        <ul className="flex justify-center gap-4 text-yellow-500">
          <li><Link href="/community">Foodies Community</Link></li>
          <li><Link href="/meals">Browse Meals</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
