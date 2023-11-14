import { Heading } from "../atoms/heading";

export function Hero(props) {
  const {
    top = "Hero Top",
    heading = "Hero Heading",
    subtitles = "Hero Subtitles",
    bg_video = "hero-bg.mp4",
  } = props;

  return (
    <div className="w-full relative border">
      <video
        autoPlay
        muted
        loop
        className="min-h-[75dvh] object-cover"
        style={{ filter: "blur(2.2px) brightness(0.45) grayscale(0.25)" }}
      >
        <source src={`${bg_video}`} type="video/mp4" />
      </video>

      <section className="absolute inset-0 p-12">
        <Heading as="h3" className="text-xl">
          {top}
        </Heading>

        <Heading className="text-5xl font-bold my-2">{heading}</Heading>

        <Heading as="h3" className="text-xl">
          {subtitles}
        </Heading>
      </section>
    </div>
  );
}
