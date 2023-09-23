import {type Experience as ExperienceI} from "@/models/experience";
import {format} from "date-fns";
import Link from "next/link";
import {ArrowUpRightFromCircle} from "lucide-react";
import React from "react";

export type ExperienceProps = {
  experience: ExperienceI;
}

export default function Experience({experience}: ExperienceProps) {
  return (
    <div className={'group'}>
      <div className={'text-3xl leading-10 flex gap-8 flex-row-reverse group-odd:flex-row group-odd:ml-auto w-1/2'}>
        <svg className={'aspect-square w-16 shrink-0 group-odd:-ml-8 group-even:-mr-8'}>
          <circle
            r={32}
            cx={'50%'}
            cy={'50%'}
            className={'fill-current'}
          />
          <line
            x1={'50%'}
            y1={'0%'}
            x2={'50%'}
            y2={'100%'}
            className={'stroke-[4] stroke-current'}
          />
        </svg>
        <div className={'w-full p-6 border border-white rounded-xl group-even:text-right group/experience-card bg-white bg-opacity-5 border-opacity-30 transition-all'}>
          <h2 className={'font-bold'}>
            {experience.endDate === 'current'
              ? <>{format(experience.startDate, 'yyyy')} - current</>
              : <>{format(experience.startDate, 'yyyy')} - {format(experience.endDate, 'yyyy')}</>
            }
          </h2>
          <p>{experience.jobTitle}</p>
          {experience.organizationUrl
            ? (
              <Link href={experience.organizationUrl} className={'inline-flex items-center group-even:flex-row-reverse gap-1 hover:underline'}>
                {experience.organization}
                <ArrowUpRightFromCircle
                  className={'opacity-0 group-hover/experience-card:opacity-100 transition-opacity h-full'}
                />
              </Link>
            )
            : <p>{experience.organization}</p>
          }
        </div>
      </div>
    </div>

  )
}