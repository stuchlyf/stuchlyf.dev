import {Github, Linkedin, Mail} from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className={'h-full p-16 flex flex-col justify-between font-display italic'}>
      <Link href={'https://github.com/stuchlyf'} className={'flex gap-8 items-center'}>
        <Github className={'h-44 w-44'} strokeWidth={0.5} />
        <span className={'text-8xl'}>/stuchlyf</span>
      </Link>
      <Link href={'mailto:stuchlyf@stuchlyf.dev'} className={'flex gap-8 items-center justify-end'}>
        <span className={'text-8xl'}>stuchlyf@stuchlyf.dev</span>
        <Mail className={'h-44 w-44'} strokeWidth={0.5} />
      </Link>
      <Link href={'https://linkedin.com/in/stuchlyf'} className={'flex gap-8 items-center'}>
        <Linkedin className={'h-44 w-44'} strokeWidth={0.5} />
        <span className={'text-8xl'}>/in/stuchlyf</span>
      </Link>
    </main>
  )
};