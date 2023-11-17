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
        backdropFilter: small
          ? "blur(6px) brightness(0.7)"
          : "blur(4px) brightness(0.8)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        height: small ? "45px" : "unset",
      }}
    >
      <nav
        className="p-4 flex items-center justify-between  w-[98%]"
        style={{
          transform: small ? "scale(0.8) translate(0, -20%)" : "scale(1)",
          transition: "all 0.4s",
        }}
      >
        <div className="flex items-center mr-6">
          <Logo />
          <Heading as="h6" className="text-xl font-bold ml-2">
            Melodev
          </Heading>
        </div>

        <ul className="flex justify-between w-[70%]">
          {links.map((link) => (
            <Link key={link} href={`#${link}`}>
              {link}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
