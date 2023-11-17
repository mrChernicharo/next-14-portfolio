import { Heading } from "../atoms/heading";
import { SkillIcon } from "../atoms/skill-icon";

export function SkillGrid(props) {
  const { skills, ...rest } = props;

  return (
    <div id="skills" className="p-6" {...rest}>
      <Heading as="h4" className="text-2xl font-bold mb-2 mt-6">
        Skills
      </Heading>
      <ul className="grid grid-cols-8">
        {skills.map((skill) => (
          <li key={skill.id} id={skill.name}>
            <SkillIcon skill={skill} size={28} />
          </li>
        ))}
      </ul>
    </div>
  );
}
