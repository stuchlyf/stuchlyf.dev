import Image, {ImageProps} from "next/image";
import React from "react";
import Link from "next/link";
import {ArrowRight, GitBranch} from "lucide-react";
import {cn} from "@/lib/utils";

export type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    link: string;
    image: ImageProps['src'];
    githubLink?: string;
  }
}

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <div className={'bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-30 h-full w-[34rem] flex flex-col overflow-clip'}>
      <Image
        src={project.image}
        alt={`A picture of the project ${project.name}`}
        className={'h-[24.375rem] object-cover object-top'}
      />
      <div className={'flex flex-col px-6 py-4 gap-2'}>
        <h2 className={'font-display italic text-3xl underline'}>{project.name}</h2>
        <p className={'text-2xl font-light'}>{project.description}</p>
      </div>
      <div className={'flex'}>
        <Link href={project.link} className={cn('py-6 pl-6 flex gap-4 text-2xl items-center grow hover:bg-white hover:bg-opacity-10', project.githubLink ? undefined : 'pr-6')}>
          visit page
          <ArrowRight />
        </Link>
        {project.githubLink && (
          <Link href={project.githubLink} className={'py-6 px-6 hover:bg-white hover:bg-opacity-10 flex items-center'}>
            <GitBranch />
          </Link>
        )}
      </div>
    </div>
  )
}