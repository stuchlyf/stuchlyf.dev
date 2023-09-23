import React from "react";
import {ModeToggle} from "@/components/mode-toggle";
import NavLink from "@/components/nav-link";
import StuchlyfLogoFull from "@/components/svg/stuchlyf-logo-full";

export function Header() {
  return (
    <header className={'flex justify-between p-8 items-center'}>
      <div>
        <StuchlyfLogoFull
          className={'h-16 text-black dark:text-white'}
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