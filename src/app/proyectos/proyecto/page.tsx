import projectList from '@/data/projects.json';

import Post from '@/components/post/Post';

export default function Project() {
  return (
    <div className="bg-lightGray p-10 mb-10 flex flex-col justify-center items-center gap-10 lg:p-20 xl:rounded-xl">
      {projectList.map((project) => (
        <Post
          title={project.title}
          imageList={project.images}
          paragraphList={project.paragraps}
        />
      ))}
    </div>
  );
}
