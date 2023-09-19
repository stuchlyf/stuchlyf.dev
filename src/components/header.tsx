import React from "react";
import Image from 'next/image';
import logo from '@/../public/logo.svg';
import {ModeToggle} from "@/components/mode-toggle";
import NavLink from "@/components/NavLink";

export function Header() {
  return (
    <header className={'flex justify-between p-8 items-center'}>
      <div>
        <Image
          src={logo}
          alt={'stuchlyf. logo'}
          className={'h-16 w-min'}
        />
      </div>
      <nav>
        <ul className={'flex gap-4 font-semibold text-2xl font-body'}>
          <li>
            <NavLink href={'/'}>home</NavLink>
          </li>
          <li>
            <NavLink href={'/cv'}>cv</NavLink>
          </li>
          <li>
            <NavLink href={'/projects'}>projects</NavLink>
          </li>
          <li>
            <NavLink href={'/contact'}>contact</NavLink>
          </li>
        </ul>
      </nav>
      <ModeToggle />
    </header>
  )
}