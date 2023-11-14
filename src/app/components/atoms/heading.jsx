export function Heading(props) {
  const { children, as, ...rest } = props;

  switch (as) {
    case "h2":
      return <h2 {...rest}>{children}</h2>;
    case "h2":
      return <h2 {...rest}>{children}</h2>;
    case "h3":
      return <h3 {...rest}>{children}</h3>;
    case "h4":
      return <h4 {...rest}>{children}</h4>;
    case "h5":
      return <h5 {...rest}>{children}</h5>;
    case "h6":
      return <h6 {...rest}>{children}</h6>;
    default:
      return <h1 {...rest}>{children}</h1>;
  }
}
