import Image from "next/image";
import React from "react";
import Link from "next/link";
import {ArrowRight, GitBranch} from "lucide-react";
import {cn} from "@/lib/utils";
import {Project} from "@/models/project";

export type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({project}: ProjectCardProps) {
  return (
    <div className={'bg-white bg-opacity-5 rounded-2xl border border-white border-opacity-30 h-full w-[34rem] overflow-clip grid grid-rows-[auto_1fr_auto]'}>
      <Image
        src={project.image}
        alt={`A picture of the project ${project.name}`}
        className={'h-[24.375rem] object-cover object-top'}
        width={'542'}
        height={'390'}
      />
      <div className={'flex flex-col px-6 py-4 gap-2'}>
        <h2 className={'font-display italic text-3xl underline'}>{project.name}</h2>
        <p className={'text-2xl font-light'}>{project.description}</p>
      </div>
      <div className={'flex'}>
        {project.githubLink && !project.link ? (
          <Link href={project.githubLink} className={cn('py-6 px-6 flex gap-4 text-2xl items-center grow hover:bg-white hover:bg-opacity-10')}>
            <GitBranch />
            visit on github
          </Link>
        )
        : project.link && !project.githubLink ? (
          <Link href={project.link} className={'py-6 px-6 flex gap-4 text-2xl items-center grow hover:bg-white hover:bg-opacity-10'}>
            visit page
            <ArrowRight />
          </Link>
        )
        : project.link && project.githubLink ? (
          <>
            <Link href={project.link} className={'py-6 pl-6 flex gap-4 text-2xl items-center grow hover:bg-white hover:bg-opacity-10'}>
              visit page
              <ArrowRight />
            </Link>
            <Link href={project.githubLink} className={'py-6 px-6 hover:bg-white hover:bg-opacity-10 flex items-center'}>
              <GitBranch />
            </Link>
          </>
        )
        : (
          <></>
        )}

      </div>
    </div>
  )
}