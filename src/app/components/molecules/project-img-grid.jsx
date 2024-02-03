import { LazyImage } from "../atoms/lazy-image";

export function ProjectImgGrid({ project }) {
  return (
    <ul className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 rounded-lg overflow-hidden">
      {project.image_urls.map((img, i) => (
        <picture
          className="w-full h-[78px] sm:h-[110px] md:h-[150px] overflow-hidden"
          key={`${project.name}-img-${i}`}
        >
          <LazyImage
            key={`${project.name}-img-${i}`}
            alt={`${project.name}-img-${i}`}
            url={img}
            miniUrl={project.thumbs[i]}
          />
        </picture>
      ))}
    </ul>
  );
}
