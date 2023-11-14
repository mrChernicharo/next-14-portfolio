import Link from "next/link";
import { Logo } from "../atoms/logo";

export function Header(props) {
  const { links = ["about", "experience", "skills", "projects"] } = props;

  return (
    <header
      className="fixed top-0 z-10 bg-transparent w-screen rounded-s-lg"
      style={{
        backdropFilter: "blur(4px)",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      }}
    >
      <nav className="p-4 flex items-center justify-between">
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
