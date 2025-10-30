'use client';

// import Link from 'next/link';

// import AnimatedService from '@/utils/AnimatedService';
// import { useCuratorFeed } from '@/hooks/useCuratorFeed';
import { useEffect } from 'react';

export default function News() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'UTF-8';
    script.src =
      'https://cdn.curator.io/published/c478ba25-4bb3-4f96-a59c-794435240fd7.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h2 className="text-blackColor text-3xl pb-10 lg:text-4xl">Actualidad</h2>
      <div id="curator-feed-default-feed-layout" className="flex gap-20"></div>
    </div>
  );
}

// const posts = useCuratorFeed();

// return (
//   <div className="bg-lightGray pt-10 my-10 flex flex-col justify-center items-center xl:rounded-xl">
//     <h2 className="text-blackColor text-3xl lg:text-4xl">Actualidad</h2>
//     <AnimatedService>
//       <ul className="p-10 flex flex-wrap justify-center gap-10">
//         <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
//           <Link
//             href="/actualidad/first-post"
//             className="p-8 flex flex-col items-center"
//             aria-label="Go to first post page"
//           >
//             <h3 className="text-2xl">Post Title</h3>
//             <div className="flex flex-col justify-center items-center gap-8">
//               <img
//                 src="/images/news/example.jpg"
//                 className="w-80 h-60 object-cover"
//                 alt="Post name image"
//               ></img>
//               <p className="text-text text-center">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since the 1500s...
//               </p>
//             </div>
//           </Link>
//         </li>

//         <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
//           <Link
//             href="/actualidad/first-post"
//             className="p-8 flex flex-col items-center"
//             aria-label="Go to first post page"
//           >
//             <h3 className="text-2xl">Post Title</h3>
//             <div className="flex flex-col justify-center items-center gap-8">
//               <img
//                 src="/images/news/example.jpg"
//                 className="w-80 h-60 object-cover"
//                 alt="Post name image"
//               ></img>
//               <p className="text-text text-center">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since the 1500s...
//               </p>
//             </div>
//           </Link>
//         </li>

//         <li className="shadow-[0_0_10px_rgb(0,0,0,0.09)] rounded-xl transition-transform ease-out duration-300 md:w-sm lg:h-[30rem] hover:scale-105 hover:cursor-pointer">
//           <Link
//             href="/actualidad/first-post"
//             className="p-8 flex flex-col items-center"
//             aria-label="Go to first post page"
//           >
//             <h3 className="text-2xl">Post Title</h3>
//             <div className="flex flex-col justify-center items-center gap-8">
//               <img
//                 src="/images/news/example.jpg"
//                 className="w-80 h-60 object-cover"
//                 alt="Post name image"
//               ></img>
//               <p className="text-text text-center">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy text
//                 ever since the 1500s...
//               </p>
//             </div>
//           </Link>
//         </li>
//       </ul>
//     </AnimatedService>
//   </div>
// );
//}
