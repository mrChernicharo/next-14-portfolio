import { Heading } from "../atoms/heading";
import { SkillIcon } from "../atoms/skill-icon";

export function SkillGrid(props) {
  const { skills, ...rest } = props;

  return (
    <div id="Skills" className="p-6" {...rest}>
      <Heading as="h4" className="text-2xl font-bold mb-2 mt-6">
        Skills
      </Heading>
      <hr className="mb-6 border-t  border-slate-700" />

      <ul className="m-auto grid grid-cols-5 sm:grid-cols-9 gap-2 sm:gap-6 max-w-[560px]">
        {skills.map((skill, i) => (
          <li key={skill.id} id={skill.name} className="flex items-center justify-center">
            <SkillIcon skill={skill} size={42} index={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}
