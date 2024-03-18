import { Hero } from "./components/molecules/hero";
import { Header } from "./components/molecules/header";
import { Article } from "./components/molecules/article";
import { ListArticle } from "./components/molecules/list-article";
import { promises as fs } from "fs";
import { SkillGrid } from "./components/molecules/skill-grid";
import { JobList } from "./components/molecules/job-list";
import { ProjectList } from "./components/molecules/project-list";
import { Footer } from "./components/molecules/footer";
import Image from "next/image";
import { StackOverflowWidget } from "./components/molecules/stackOverflowWidget";

export default async function Home() {
  const data = await fs.readFile(process.cwd() + "/public/data.jsonc", "utf8").then(JSON.parse);

  const codingSince = new Date(data.info.codingSince);
  const codingYears = Math.floor((Date.now() - codingSince.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <main className="main-screen">
      <Header />

      <Hero top="Hey, I'm Felipe Melo 👋" heading="Fullstack Developer" subtitles="Welcome to my Portfolio" />

      <div className="main-content">
        <Article
          id="About"
          title="About Me"
          content={`Ahoy! I'm Felipe Chernicharo, your friendly neighborhood Full-Stack Developer from the vibrant streets of Rio de Janeiro! 
        Armed with a keyboard and a cup of coffee, I embark on a journey to turn pixels into amazing experiences. 
        With ${codingYears} years in the coding trenches, I'm not just chasing bugs; I'm chasing dreams.`}
        />

        <ListArticle title="Education" items={data.education} />

        <ListArticle title="Achievements" items={data.achievements} codingYears={codingYears} />
        <StackOverflowWidget />

        <SkillGrid skills={data.skills} />

        <JobList jobs={data.jobs} />

        <ProjectList projects={data.projects} />
      </div>

      <Footer />
    </main>
  );
}
