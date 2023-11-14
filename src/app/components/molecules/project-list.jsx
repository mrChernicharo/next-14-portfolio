import { Heading } from "../atoms/heading";
import { Paragraph } from "../atoms/paragraph";
import { SkillIcon } from "../atoms/skill-icon";

const dateFormat = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

export function ProjectList({ projects }) {
  return (
    <article className="p-6">
      <Heading as="h4" className="text-2xl font-bold mb-2">
        Personal Projects
      </Heading>

      <section>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </section>
    </article>
  );
}

function ProjectItem({ project }) {
  //   const {
  //     id,
  //     name,
  //     site_url,
  //     github_url,
  //     created_at,
  //     updated_at,
  //     description,
  //     main_language,
  //     image_urls,
  //     video_url,
  //     skills,
  //   } = project;

  //   console.log({
  //     id,
  //     name,
  //     site_url,
  //     github_url,
  //     created_at,
  //     updated_at,
  //     description,
  //     main_language,
  //     image_urls,
  //     video_url,
  //     skills,
  //   });

  const dateStr = `Created at ${dateFormat(project.created_at)}${
    project.updated_at
      ? `. Last update at ${dateFormat(project.updated_at)}`
      : ""
  }`;

  return (
    <div className="py-4">
      <div className="flex flex-col justify-between rounded-md border">
        <Heading as="h5" className="text-xl font-bold">
          {project.name}
        </Heading>

        <Paragraph className="text-slate-400 text-sm">{dateStr}</Paragraph>
        <Paragraph className="text-slate-400">{project.description}</Paragraph>

        <ul className="flex items-center">
          {project.skills.map((skill) => (
            <li key={skill.id} id={skill.name}>
              <SkillIcon skill={skill} size={28} />
            </li>
          ))}
        </ul>

        <div>
          {project.site_url ? <button>Visit Now!</button> : null}
          {project.github_url ? <button>Code</button> : null}
        </div>
      </div>
    </div>
  );
}
