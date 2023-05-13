import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();

  function handleClick() {
    router.push("/home");
  }

  return (
    <>
      <Head>
        <title>
          Eduketa is an online educational platform that allows you access to
          programming resources, and quizes and projects that will help you
          build real world projects.
        </title>
      </Head>
      <section className="flex items-center justify-center h-screen">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="text-4xl lg:text-5xl 2xl:text-6xl mb-8 text-[#111111] dark:text-white font-bold uppercase tracking-widest">
            Eduketa
          </h1>
          <p className="text-[#333333] dark:text-white opacity-75 leading-relaxed mb-8">
            Eduketa is an online educational platform that allows you access to
            programming resources, and quizes and projects that will help you
            build real world projects.
          </p>
          <button
            onClick={handleClick}
            className="bg-[#111111] dark:bg-white py-3 px-6 rounded text-[#ffffff] dark:text-black shadow"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
