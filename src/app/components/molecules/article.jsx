import { Heading } from "../atoms/heading";
import { Paragraph } from "../atoms/paragraph";

export function Article(props) {
  const {
    title = "Article title",
    subtitle,
    content = "article content, Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam temporibus magni recusandae enim laborum fuga alias ea possimus consequatur hic similique, tenetur ratione amet aperiam obcaecati dolore voluptates odio?",
  } = props;

  return (
    <article className="p-6">
      <Heading as="h4" className="text-2xl font-bold mb-2">
        {title}
      </Heading>

      {subtitle && (
        <Heading as="h5" className="text-lg">
          {subtitle}
        </Heading>
      )}

      <Paragraph>{content}</Paragraph>
    </article>
  );
}
