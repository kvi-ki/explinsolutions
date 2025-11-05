'use client';

import AnimatedService from '@/utils/AnimatedService';

import projectsList from '@/data/projects.json';
import PostCard from '@/components/postCard/PostCard';

export default function ProjectsPage() {
  const formatPath = (title: string) =>
    title
      .normalize('NFD') // separates accents from letters
      .replace(/[\u0300-\u036f]/g, '') // removes accents
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // replaces non-alphanumeric with hyphen
      .replace(/^-+|-+$/g, ''); // trims leading/trailing hyphens

  return (
    <div className="bg-lightGray pt-10 my-10 flex flex-col justify-center items-center xl:rounded-xl">
      <h2 className="text-blackColor text-3xl lg:text-4xl">Proyectos</h2>
      <AnimatedService>
        <ul className="p-10 flex flex-wrap justify-center gap-10">
          {projectsList.map((project) => (
            <li
              key={project.title}
              className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[33rem] hover:scale-105 hover:cursor-pointer"
            >
              <PostCard
                title={project.title}
                imageSource={project.images[0].source}
                imageAlt={project.images[0].alt}
                description={project.paragraps[0]}
                link={`/proyectos/${formatPath(project.title)}`}
              />
            </li>
          ))}
        </ul>
      </AnimatedService>
    </div>
  );
}
