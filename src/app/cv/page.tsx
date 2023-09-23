import React from "react";
import {type Experience as ExperienceI} from "@/models/experience";
import Experience from "./components/experience";

const experiences = [
  {
    endDate: 'current',
    startDate: new Date('Jun 26 2023 00:00:00 GMT+0200 (Central European Summer Time)'),
    jobTitle: 'Custom Software Engineering Associate',
    organization: 'Accenture',
    organizationUrl: 'https://accenture.com'
  },
  {
    endDate: new Date('Jun 26 2023 00:00:00 GMT+0200 (Central European Summer Time)'),
    startDate: new Date('Sep 01 2020 00:00:00 GMT+0200 (Central European Summer Time)'),
    jobTitle: 'Ausbildung zum Fachinformatiker fuer Anwendungsentwicklung',
    organization: 'Accenture',
    organizationUrl: 'https://accenture.com'
  },
  {
    endDate: new Date('Jul 27 2020 00:00:00 GMT+0200 (Central European Summer Time)'),
    startDate: new Date('Sep 13 2013 00:00:00 GMT+0200 (Central European Summer Time)'),
    jobTitle: 'Student',
    organization: 'JGAW-Realschule Hof'
  },
] satisfies Array<ExperienceI>;

async function getExperiences() {
  // TODO: Sort experiences by Date.
  return experiences;
}

export default async function Page() {
  const experiences = await getExperiences();

  return (
    <main className={'p-16 h-full'}>
      <div>
        {experiences.map(experience=> (
          <Experience key={`${experience.jobTitle}-${experience.organization}`} experience={experience} />
        ))}
      </div>
    </main>
  )
}
