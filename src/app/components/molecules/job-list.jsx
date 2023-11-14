import { Heading } from "../atoms/heading";
import { ListItem } from "../atoms/list-item";

export function JobList(props) {
  const { jobs } = props;

  return (
    <article className="p-6">
      <Heading as="h4" className="text-2xl font-bold mb-2">
        Work Experience
      </Heading>

      <ul>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </ul>
    </article>
  );
}

function JobItem({ job }) {
  const {
    id,
    title,
    type,
    company,
    company_img_url,
    company_website_url,
    company_location,
    company_address,
    started_at,
    ended_at,
    description,
    responsibilities,
  } = job;

  //   console.log({
  //     id,
  //     title,
  //     type,
  //     company,
  //     company_img_url,
  //     company_website_url,
  //     company_location,
  //     company_address,
  //     started_at,
  //     ended_at,
  //     description,
  //     responsibilities,
  //   });
}
