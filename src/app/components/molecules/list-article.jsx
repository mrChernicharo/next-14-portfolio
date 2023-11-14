import { Heading } from "../atoms/heading";
import { ListItem } from "../atoms/list-item";
import { Paragraph } from "../atoms/paragraph";

export function ListArticle(props) {
  const { title = "Article title", items } = props;

  return (
    <article className="p-6">
      <Heading as="h4" className="text-2xl font-bold mb-2">
        {title}
      </Heading>

      <ul>
        {items.map((item) => (
          <ListItem key={item} text={item} />
        ))}
      </ul>
    </article>
  );
}
