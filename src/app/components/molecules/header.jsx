"use client";

import Link from "next/link";
import { Logo } from "../atoms/logo";
import { useEffect, useState, useCallback } from "react";
import { Heading } from "../atoms/heading";

export function Header(props) {
  const {
    links = ["Top", "About", "Experience", "Skills", "Projects", "Contact"],
  } = props;

  const [small, setSmall] = useState(false);

  const adjustHeader = useCallback(
    (e) => {
      if (e.target.scrollingElement.scrollTop > 400 && !small) {
        setSmall((p) => true);
      } else if (e.target.scrollingElement.scrollTop <= 400 && small) {
        setSmall((p) => false);
      }
    },
    [small]
  );

  const onResize = useCallback(() => {
    const [w, h] = [window.innerWidth, window.innerHeight];

    console.log(w, h);
  }, []);

  // useEffect(() => {
  //   const imgs = [...document.querySelectorAll("img")];
  //   const imgUrls = [];
  //   imgs.forEach((img) => {
  //     imgUrls.push(img.src);
  //   });
  //   console.log(imgUrls);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", adjustHeader);
    return () => window.removeEventListener("scroll", adjustHeader);
  }, [adjustHeader]);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

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
      <nav className="py-4 px-4 md:px-8 flex items-center justify-between">
        <div
          className="flex items-center mr-4"
          style={{
            transform: small ? "scale(0.8) translate(10%, -20%)" : "scale(1)",
            transformOrigin: "top left",
            transition: "all 0.4s",
          }}
        >
          <Logo />
          <Heading as="h6" className="text-xl font-bold ml-2 hidden sm:block">
            Melodev
          </Heading>
        </div>

        <div
          className="flex items-center justify-between text-sm md:text-md"
          style={{
            transform: small ? "scale(0.8) translate(-10%, -32%)" : "scale(1)",
            transformOrigin: "top right",
            transition: "all 0.4s",
          }}
        >
          <ul>
            {links.map((link, i) => {
              if (!small && i === 0) return;
              return (
                <Link key={link} href={`#${link}`} className="ml-2">
                  {link}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
