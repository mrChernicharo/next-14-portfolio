import Link from "next/link";

export function NavLinks({ small = false }) {
  const links = ["Top", "About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <>
      {links.map((link, i) => {
        if (i === 0 && !small) return;
        return (
          <Link key={link} href={`#${link}`} className="ml-2">
            {link}
          </Link>
        );
      })}
    </>
  );
}
