import ProjectCard from "@/app/projects/components/project-card";
import noisetoolImage from '@/../public/noisetool.png';

export default function Page() {
  return (
    <main className={'h-full p-16'}>
      <ProjectCard
        project={{
          name: 'noisetool.',
          description: 'A WebApp to enhance you focus by replacing you background noises with generated noise.',
          githubLink: 'https://github.com/stuchlyf/noisetool..git',
          link: 'https://noisetool.stuchlyf.dev',
          image: noisetoolImage
        }}
      />
    </main>
  )
}
