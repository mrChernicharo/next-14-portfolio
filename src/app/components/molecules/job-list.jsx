import Image from "next/image";
import { Heading } from "../atoms/heading";
import { ListItem } from "../atoms/list-item";
import { Paragraph } from "../atoms/paragraph";
import Link from "next/link";

const dateFormat = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    month: "short",
    year: "numeric",
  });

export function JobList(props) {
  const { jobs } = props;

  return (
    <article id="Experience" className="p-6">
      <Heading as="h4" className="text-2xl font-bold mb-2 mt-6">
        Work Experience
      </Heading>
      <hr className="mb-6 border-t  border-slate-700" />

      <section>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </section>
    </article>
  );
}

function JobItem({ job }) {
  // const {
  //   id,
  //   title,
  //   type,
  //   company,
  //   company_img_url,
  //   company_website_url,
  //   company_location,
  //   company_address,
  //   started_at,
  //   ended_at,
  //   description,
  //   responsibilities,
  // } = job;

  const squareImage = ["Genesys", "QGiv"].includes(job.company);

  const dateStr = `started ${dateFormat(job.started_at)}${job.ended_at ? `, ended ${dateFormat(job.ended_at)}` : ""}`;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between ">
        <div>
          <Heading as="h5" className="text-xl font-bold">
            {job.title}
          </Heading>

          <Heading as="h6" className="">
            <span>at </span>
            <a href={`https://${job.company_website_url}`} target="_blank">
              {job.company}
            </a>
          </Heading>
          <Heading as="h6" className="text-sm text-slate-200 pt-2">
            {job.company_location}
          </Heading>
        </div>

        <picture>
          <Image src={job.company_img_url} alt={job.company} width={squareImage ? 50 : 100} height={50} />
        </picture>
      </div>

      <Paragraph className="my-2 text-slate-400 text-sm">{dateStr}</Paragraph>

      <ul>
        {job.responsibilities.map((resp, i) => {
          const text = `⧫ ${resp}`;
          return <ListItem key={`${job.id}--${i}`} text={text} className="mb-2 text-sm" />;
        })}
      </ul>
    </div>
  );
}
