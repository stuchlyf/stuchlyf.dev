import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default async function Home() {
  return (
    <main className={"container flex flex-col items-center justify-center"}>
      <section
        id={"landing"}
        className={"flex min-h-[100dvh] snap-center flex-col"}
      >
        <div className={"flex flex-1 justify-center"}>
          <div
            className={
              "flex max-w-[44rem] flex-col-reverse items-center gap-8 xl:max-w-[75rem] xl:flex-row xl:items-center xl:justify-between"
            }
          >
            <div
              className={"prose prose-neutral dark:prose-invert lg:prose-xl"}
            >
              <h2>
                Hey, <Link href={"#who-am-i"}>I&apos;m Florian</Link>.
              </h2>
              <h2>
                I&apos;m a software engineer from{" "}
                <Link
                  href={
                    "https://www.google.com/maps/place/Hof/@50.3112457,11.8479538,13z/data=!3m1!4b1!4m6!3m5!1s0x47a110b7c7f9b217:0x41db728f061d9b0!8m2!3d50.3135391!4d11.9127814!16zL20vMDMwcWhi?entry=ttu"
                  }
                  target="_blank"
                >
                  Hof, Germany
                </Link>
                .
              </h2>
              <h2>
                I like to build things based on{" "}
                <Link href={"#technologies"}>bleeding edge technologies</Link>.
              </h2>
            </div>
            <Image
              className={"aspect-square w-96"}
              src={"/memoji.png"}
              alt={"memoji"}
              width={512}
              height={512}
            />
          </div>
        </div>
        <div className={"flex justify-center pb-4"}>
          <ArrowDownIcon className={"h-6 w-6"} />
        </div>
      </section>
      <section
        id={"who-am-i"}
        className={
          "flex min-h-[100dvh] snap-center items-center justify-center"
        }
      >
        <div className={"prose prose-neutral dark:prose-invert lg:prose-xl"}>
          <h1>Who am I?</h1>
          <p>
            I&apos;ve been programming since late high school as a hobby and
            started my professional career a year later by starting an
            apprenticeship at Accenture in Hof.
          </p>
          <p>
            There I was able to learn development in a professional environment.
            Since I&apos;m able to learn quickly I was able to go onto client
            projects after a short training for our internal processes.
          </p>
          <p>
            I&apos;ve now been working 4 years at Accenture and often work on
            personal projects to further my knowledge in software engineering. I
            mostly start new projects with the goal of learning new technologies
            for example Rust or Ollama and Vector Databases
          </p>
        </div>
      </section>
      <section
        id={"technologies"}
        className={
          "flex min-h-[100dvh] snap-center items-center justify-center"
        }
      >
        <div className={"prose prose-neutral dark:prose-invert lg:prose-xl"}>
          <h1>What are my skills?</h1>
          <p className={"lead"}>
            tl;dr: for backend I'm using Java with Spring Boot and for frontend
            TypeScript with React/Next.js.
          </p>
          <p>
            Throughout the years I was able to learn many technologies. Here are
            the ones I'm most confident in working with:
          </p>
          <h2>Backend</h2>
          <p className={"lead"}>
            I might have started with frontend development but since quite some
            time now I've found my passion: Backend Engineering.
          </p>
          <p>
            I've tried many new technologies in this field but I've got stuck
            with Java and Spring Boot. In my opinion it's a easy to learn
            framework and pretty performant. I now have about 4 years of
            experience with this stack.
          </p>
          <p>
            For more resource sensitive tasks I've chosen to learn Rust. It's a
            very low level language when you compare it to Java, but since it
            has a borrow checker it's much easier to learn than C/C++.
          </p>
          <p>
            For small, personal and simple projects I usually use Next.js as my
            backend since I usually have to create the application anyways. But
            usually when the application gets too complex I migrate the backend
            over to Java.
          </p>
          <h2>Frontend</h2>
          <p>
            I've started with plain HTML, CSS & JavaScript as many developers do
            when trying to first time program something.
          </p>
          <p>
            After a while I've started to use the Framework React and never left
            the framework. It just makes development of frontend applications
            easy. But now I usually use Next.js since it makes the creating a
            small backend much easier.
          </p>
          <p>
            During my apprenticeship I was also able to get some experience with
            Angular. But after a few times of working with it I've realized that
            it's definitely not my preferred frontend framework.
          </p>
          <h2>Other</h2>
          <p>
            I've also had to get to know many databases by now. Professionally
            I've worked with OracleDB and Apache Cassandra, but on my side
            projects I usually use MySQL or PostgreSQL.
          </p>
          <p>
            Since I mostly try to architect my projects as a microservices
            architecture I've also had my encounters with Kafka and RabbitMQ for
            asynchronous processing of messages and event driven architectures.
          </p>
          <p>
            Lastly and probably the newest topic are AIs and LLMs. I've also
            already gotten some experience with those. I've started to use the
            new Spring AI module for embedding texts into a vector database and
            using this as a knowledge base for a chatbot.
          </p>
        </div>
      </section>
      <section
        id={"contact"}
        className={
          "flex min-h-[50dvh] w-full snap-center flex-col items-center justify-center"
        }
      >
        <div
          className={"prose prose-neutral dark:prose-invert lg:prose-xl mb-8"}
        >
          <h1>Wanna get in contact?</h1>
          <p>
            Send me a mail at{" "}
            <Link href={"mailto:stuchlyf@stuchlyf.dev"}>
              stuchlyf@stuchlyf.dev
            </Link>{" "}
            or message me on{" "}
            <Link href={"https://linkedin.com/in/stuchlyf"}>LinkedIn</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
