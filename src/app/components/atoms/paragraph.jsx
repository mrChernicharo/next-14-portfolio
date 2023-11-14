export function Paragraph(props) {
  const { children, ...rest } = props;

  return <p {...rest}>{children}</p>;
}
