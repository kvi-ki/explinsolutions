'use client';

import Link from 'next/link';

import AnimatedService from '@/utils/AnimatedService';

export default function ProjectsPage() {
  return (
    <div className="bg-lightGray pt-10 my-10 flex flex-col justify-center items-center xl:rounded-xl">
      <h2 className="text-blackColor text-3xl lg:text-4xl">Proyectos</h2>
      <AnimatedService>
        <ul className="p-10 flex flex-wrap justify-center gap-10">
          <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
            <Link
              href="/proyectos/proyecto"
              className="p-8 flex flex-col items-center"
              aria-label="Go to first post page"
            >
              <h3 className="text-2xl">Nombre del Proyecto</h3>
              <div className="flex flex-col justify-center items-center gap-8">
                <img
                  src="/images/news/example.jpg"
                  className="w-80 h-60 object-cover"
                  alt="Post name image"
                ></img>
                <p className="text-text text-center">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s...
                </p>
              </div>
            </Link>
          </li>

          <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
            <Link
              href="/proyectos/proyecto"
              className="p-8 flex flex-col items-center"
              aria-label="Go to first post page"
            >
              <h3 className="text-2xl">Nombre del Proyecto</h3>
              <div className="flex flex-col justify-center items-center gap-8">
                <img
                  src="/images/news/example.jpg"
                  className="w-80 h-60 object-cover"
                  alt="Post name image"
                ></img>
                <p className="text-text text-center">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s...
                </p>
              </div>
            </Link>
          </li>

          <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
            <Link
              href="/proyectos/proyecto"
              className="p-8 flex flex-col items-center"
              aria-label="Go to first post page"
            >
              <h3 className="text-2xl">Nombre del Proyecto</h3>
              <div className="flex flex-col justify-center items-center gap-8">
                <img
                  src="/images/news/example.jpg"
                  className="w-80 h-60 object-cover"
                  alt="Post name image"
                ></img>
                <p className="text-text text-center">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s...
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </AnimatedService>
    </div>
  );
}
