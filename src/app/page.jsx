import Image from "next/image";
import { Hero } from "./components/molecules/hero";
import { Header } from "./components/molecules/header";
import { Article } from "./components/molecules/article";
import { ListArticle } from "./components/molecules/list-article";
import { promises as fs } from "fs";
import { SkillGrid } from "./components/molecules/skill-grid";
import { JobList } from "./components/molecules/job-list";
import Head from "next/head";
import { ProjectList } from "./components/molecules/project-list";

export default async function Home() {
  const data = await fs
    .readFile(process.cwd() + "/public/data.jsonc", "utf8")
    .then(JSON.parse);

  return (
    <main className="min-h-screen">
      <Header />

      <Hero
        top="Hey, I'm Felipe Melo 👋"
        heading="Fullstack Developer"
        subtitles="Welcome to my Portfolio"
      />

      <Article
        id="about"
        title="About Me"
        content="Ahoy! I'm Felipe Chernicharo, your friendly neighborhood Full-Stack Developer from the vibrant streets of Rio de Janeiro! 
        Armed with a keyboard and a cup of coffee, I embark on a journey to turn pixels into amazing experiences. 
        With 5 years in the coding trenches, I'm not just chasing bugs; I'm chasing dreams."
      />

      <SkillGrid skills={data.skills} />

      <JobList jobs={data.jobs} />

      <ListArticle title="Education" items={data.education} />

      <ListArticle title="Achievements" items={data.achievements} />

      <ProjectList projects={data.projects} />
    </main>
  );
}
