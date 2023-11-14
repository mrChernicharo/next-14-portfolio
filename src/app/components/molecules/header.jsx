"use client";

import Link from "next/link";
import { Logo } from "../atoms/logo";
import { useEffect, useState } from "react";

export function Header(props) {
  const { links = ["about", "experience", "skills", "projects"] } = props;

  const [small, setSmall] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (e.target.scrollingElement.scrollTop > 400 && !small) {
        setSmall(true);
      } else if (e.target.scrollingElement.scrollTop <= 400 && small) {
        setSmall(false);
      }
    });
  });

  return (
    <header
      className="fixed top-0 z-10 bg-transparent w-screen rounded-b-xl"
      style={{
        backdropFilter: small ? "blur(6px)" : "blur(4px)",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        height: small ? "45px" : "unset",
      }}
    >
      <nav
        className="p-4 flex items-center justify-between"
        style={{
          transform: small ? "scale(0.8) translate(0, -20%)" : "scale(1)",
          transition: "all 0.4s",
        }}
      >
        <div className="mr-6">
          <Logo />
        </div>

        <ul className="flex justify-between w-full">
          {links.map((link) => (
            <Link key={link} href={`#${link}`} scroll>
              {link}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
