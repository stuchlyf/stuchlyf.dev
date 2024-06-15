import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default async function SocialMediaLinks() {
  return (
    <div
      className={
        "fixed bottom-0 right-0 rounded-tl-md bg-accent pb-2 pl-4 pr-2 pt-4"
      }
    >
      <div className={"flex gap-5"}>
        <Link href={"https://github.com/stuchlyf"}>
          <GitHubLogoIcon className={"h-6 w-6"} />
        </Link>
        <Link href={"https://linkedin.com/in/stuchlyf"}>
          <LinkedInLogoIcon className={"h-6 w-6"} />
        </Link>
        <Link href={"mailto:stuchlyf@stuchlyf.dev"}>
          <EnvelopeClosedIcon className={"h-6 w-6"} />
        </Link>
      </div>
    </div>
  );
}
