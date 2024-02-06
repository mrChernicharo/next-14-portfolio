import { LazyIcon } from "./lazy-icon";

export function SkillIcon(props) {
  const { skill, size = 28, index = 0, ...rest } = props;

  return (
    <LazyIcon
      title={skill.name}
      src={skill.image_url}
      alt={skill.name}
      width={size}
      height={size}
      index={index}
      {...rest}
    />
  );
}
