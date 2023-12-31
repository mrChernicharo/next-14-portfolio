import Image from "next/image";

export function SkillIcon(props) {
  const { skill, size = 24, ...rest } = props;

  return (
    <Image
      title={skill.name}
      src={skill.image_url}
      alt={skill.name}
      width={size}
      height={size}
      {...rest}
    />
  );
}
