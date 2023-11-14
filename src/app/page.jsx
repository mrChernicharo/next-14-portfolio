import Image from "next/image";
import { Hero } from "./components/molecules/hero";
import { Header } from "./components/molecules/header";
import { Article } from "./components/molecules/article";
import { ListArticle } from "./components/molecules/list-article";
import { promises as fs } from "fs";
import { SkillGrid } from "./components/molecules/skill-grid";

export default async function Home() {
  const data = await fs
    .readFile(process.cwd() + "/public/data.jsonc", "utf8")
    .then(JSON.parse);

  return (
    <main className="min-h-screen">
      <Header />

      <Hero
        top="Hi, I'm Felipe Melo 👋"
        heading="Fullstack Developer"
        subtitles="Welcome to my Portfolio"
      />

      <Article
        id="about"
        title="About Me"
        content="Ahoy! I'm Felipe Chernicharo, your friendly neighborhood Full-Stack Developer from the vibrant streets of Rio de Janeiro. Armed with a keyboard and a cup of coffee, I embark on a journey to turn pixels into perfection. With 4 years in the coding trenches, I'm not just chasing bugs; I'm chasing dreams."
      />

      <ListArticle title="Education" items={data.education} />

      <ListArticle title="Achievements" items={data.achievements} />

      <SkillGrid skills={data.skills} />

      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
}
