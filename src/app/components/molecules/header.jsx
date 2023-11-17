"use client";

import Link from "next/link";
import { Logo } from "../atoms/logo";
import { useEffect, useState } from "react";
import { Heading } from "../atoms/heading";

export function Header(props) {
  const {
    links = ["top", "about", "experience", "skills", "projects", "contact"],
  } = props;

  const [small, setSmall] = useState(false);

  useEffect(() => {
    const adjustHeader = (e) => {
      if (e.target.scrollingElement.scrollTop > 400 && !small) {
        setSmall((p) => true);
      } else if (e.target.scrollingElement.scrollTop <= 400 && small) {
        setSmall((p) => false);
      }
    };

    window.addEventListener("scroll", adjustHeader);
  }, [small]);

  return (
    <header
      className="fixed top-0 z-10 bg-transparent w-screen rounded-b-xl"
      style={{
        backdropFilter: small
          ? "blur(6px) brightness(0.7)"
          : "blur(4px) brightness(0.8)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
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
        <div className="flex items-center mr-4">
          <Logo />
          <Heading as="h6" className="text-xl font-bold ml-2 hidden sm:block">
            Melodev
          </Heading>
        </div>

        <ul className="flex gap-1.5 md:gap-2 justify-between text-sm md:text-md">
          {links.map((link, i) => {
            if (!small && i === 0) return;
            return (
              <Link key={link} href={`#${link}`} className="capitalize">
                {link}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
