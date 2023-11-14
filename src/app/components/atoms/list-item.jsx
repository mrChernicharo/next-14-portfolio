export function ListItem(props) {
  const { text, ...rest } = props;

  return (
    <li {...rest}>
      <span>{text}</span>
    </li>
  );
}
