export function Header(props) {
  const { links = ["jobs", "projects", "skills"] } = props;

  return (
    <header className="border">
      <nav>
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}
