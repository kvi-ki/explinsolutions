import projectList from '@/data/projects.json';

import Post from '@/components/post/Post';
import { notFound } from 'next/navigation';

export default async function ProjectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formatPath = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

  const project = projectList.find((p) => formatPath(p.title) === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-lightGray p-10 mb-10 flex flex-col justify-center items-center gap-10 lg:p-20 xl:rounded-xl">
      <Post
        id={slug}
        title={project.title}
        imageList={project.images}
        paragraphList={project.paragraps}
      />
    </div>
  );
}
