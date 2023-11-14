import Link from "next/link";
import { Logo } from "../atoms/logo";

export function Header(props) {
  const { links = ["about", "experience", "skills", "projects"] } = props;

  return (
    <header className="border p-4">
      <nav className="flex items-center justify-between">
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
