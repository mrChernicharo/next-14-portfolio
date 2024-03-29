import Image from "next/image";
import { Heading } from "../atoms/heading";
import { Paragraph } from "../atoms/paragraph";
import { SkillIcon } from "../atoms/skill-icon";
import { ProjectImgGrid } from "./project-img-grid";

const dateFormat = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

const githubIconProps = {
  size: 18,
  skill: {
    name: "github",
    image_url: "/github-mark-white.svg",
  },
};

const wwwIconProps = {
  size: 18,
  skill: {
    name: "www",
    image_url: "/globe.svg",
  },
  style: {
    fill: "none",
    stroke: "#222",
  },
};

export function ProjectList({ projects }) {
  return (
    <article id="Projects" className="p-6">
      <Heading as="h4" className="text-2xl font-bold mb-2 mt-6">
        Personal Projects
      </Heading>

      {/* <hr style={{ borderTop: "1px solid", marginBottom: 12 }} /> */}
      <hr className="mb-6 border-t  border-slate-700" />

      <section className="max-w-[800px] my-0 mx-auto">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>
    </article>
  );
}

function ProjectItem({ project }) {
  const dateStr = [
    `Created at ${dateFormat(project.created_at)}`,
    `${project.updated_at ? `Last update at ${dateFormat(project.updated_at)}` : ""}`,
  ];

  return (
    <div className="pb-12">
      <Heading as="h5" className="text-3xl font-bold">
        {project.name
          .split("-")
          .map((w) => (w.length > 1 ? `${w[0].toUpperCase()}${w.slice(1)}` : w))
          .join(" ")}
      </Heading>
      <div className="flex flex-col justify-between rounded-md">
        <Paragraph className="text-slate-200 text-sm">{project.description}</Paragraph>

        <Paragraph className="text-slate-400 text-sm">{dateStr[0]}</Paragraph>
        <Paragraph className="text-slate-400 text-sm">{dateStr[1]}</Paragraph>

        <ul className="flex items-center py-4 gap-1">
          {project.skills.map((skill, i) => (
            <li key={skill.id} id={skill.name}>
              <SkillIcon skill={skill} size={28} index={i} />
            </li>
          ))}
        </ul>

        <ProjectImgGrid project={project} />

        <div className="btn-group flex justify-end gap-2 pt-4">
          {project.site_url ? (
            <a href={`https://${project.site_url.replace("https://", "")}`} target="_blank">
              <button className="btn btn-primary text-primary-content">
                Live <SkillIcon {...wwwIconProps} />
              </button>
            </a>
          ) : null}
          {project.github_url ? (
            <a href={`https://${project.github_url.replace("https://", "")}`} target="_blank">
              <button className="btn">
                Code <SkillIcon {...githubIconProps} />
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
