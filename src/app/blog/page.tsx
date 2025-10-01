import Link from 'next/link';

export default function Blog() {
  return (
    <div className="bg-lightGray pt-10 my-10 flex flex-col justify-center items-center xl:rounded-xl">
      <h2 className="text-blackColor text-2xl lg:text-4xl">Blog</h2>
      <ul className="p-10 flex flex-wrap gap-10">
        <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 lg:w-md lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
          <Link
            href="/blog/first-post"
            className="p-8 flex flex-col items-center"
            aria-label="Go to first post page"
          >
            <h2 className="text-2xl">Post Title</h2>
            <div className="flex flex-col justify-center items-center gap-8">
              <img
                src="/images/blog/example.jpg"
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

        <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-md lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
          <Link
            href="/blog/first-post"
            className="p-8 flex flex-col items-center"
            aria-label="Go to first post page"
          >
            <h2 className="text-2xl">Post Title</h2>
            <div className="flex flex-col justify-center items-center gap-8">
              <img
                src="/images/blog/example.jpg"
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

        <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 lg:w-md lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
          <Link
            href="/blog/first-post"
            className="p-8 flex flex-col items-center"
            aria-label="Go to first post page"
          >
            <h2 className="text-2xl">Post Title</h2>
            <div className="flex flex-col justify-center items-center gap-8">
              <img
                src="/images/blog/example.jpg"
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
    </div>
  );
}
