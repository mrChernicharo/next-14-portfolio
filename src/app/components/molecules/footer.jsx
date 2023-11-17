import Image from "next/image";
import { Heading } from "../atoms/heading";
import { Paragraph } from "../atoms/paragraph";
import Link from "next/link";

const contacts = [
  {
    name: "Email",
    imgURL: "/mail.svg",
    content: "felipe.chernicharo@gmail.com",
  },
  {
    name: "Whatsapp",
    imgURL: "/logo-whatsapp.svg",
    content: "+55 21 98878-8359",
  },
  {
    name: "Github",
    imgURL: "/github-mark-white.svg",
    content: "https://github.com/mrChernicharo",
  },
  {
    name: "LinkedIn",
    imgURL: "/logo-linkedin.svg",
    content: "https://www.linkedin.com/in/felipe-chernicharo-27ba911a8/",
  },
  {
    name: "Stackoverflow",
    imgURL: "/logo-stackoverflow.svg",
    content: "https://stackoverflow.com/users/13111779/felipe-chernicharo",
  },
];

export function Footer(props) {
  const {} = props;

  return (
    <footer id="contact" className="p-6 bg-slate-800">
      <Heading as="h4" className="text-2xl font-bold mb-4 mt-2">
        Contact
      </Heading>

      <ul className="grid grid-cols-2 mb-4">
        {contacts.map((c) => {
          const href =
            c.name === "Email"
              ? `mailto:${c.content}`
              : c.name === "Whatsapp"
              ? `tel:${c.content.replace(" ", "")}`
              : c.content;

          return (
            <li key={c.name} className="my-2">
              <div className="flex gap-3 items-center">
                <picture>
                  <Image src={c.imgURL} alt={c.name} width={24} height={24} />
                </picture>
                <Link
                  href={href}
                  target="_blank"
                  className="text-sm break-words"
                >
                  {c.name}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col items-center">
        <Paragraph>Made with 💜 &nbsp;by ©Melodev</Paragraph>
        <Paragraph>All Rights Reserved</Paragraph>
        <Paragraph className="mb-4">
          {new Date().getFullYear()} - Rio de Janeiro - Brazil.
        </Paragraph>
      </div>
    </footer>
  );
}
