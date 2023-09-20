'use client';
import Link, {LinkProps as NextLinkProps} from 'next/link';
import {cn} from "@/lib/utils";
import React from "react";
import {usePathname} from "next/navigation";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps & {
  children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>

export default function NavLink(props: LinkProps) {
  const pathname = usePathname();
  const className= cn(pathname === props.href ? 'underline' : undefined, props.className);

  return (
    <Link
      {...props}
      className={className}
    />
  )
}