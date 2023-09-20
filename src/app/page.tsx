import React from "react";
import avatar from '@/../public/avatar.png';
import Image from 'next/image';

export default async function Page() {
  return (
    <main className={'h-full p-16 flex justify-between items-center'}>
      <div className={'font-light'}>
        <h1 className={'text-5xl font-bold mb-2'}>Hey! My name is Florian.</h1>
        <p className={'text-5xl'}>I&#39;m a software engineer based in Hof.</p>
        <p className={'text-5xl'}>I like to build things based on bleeding edge technologies.</p>
      </div>
      <Image
        src={avatar}
        alt={'stuchlyf. avatar'}
      />
    </main>
  )
}
