import ProjectCard from "@/app/projects/components/project-card";
import projectSchema from "@/models/project";
import {z} from "zod";
import {env} from '@/env';

export const revalidate = 86400;

async function getProjects() {
  try {
    const response = await fetch(`${env.API_BASE_URL}/v1/projects`);
    const json = await response.json() as unknown;

    return z.array(projectSchema).parse(json);
  } catch (e) {
    console.error(e);
    throw new Error('There was an Error while trying to fetch Projects', { cause: e });
  }
}

export default async function Page() {
  const projects = await getProjects();

  return (
    <main className={'h-full p-16'}>
      <div className={'flex gap-8 overflow-x-auto'}>
        {projects.map(project => (
          <div key={project.name} className={'shrink-1 grow-0 basis-0'}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  )
}
