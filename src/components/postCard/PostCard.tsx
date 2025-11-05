import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import AppImage from '../appImage/AppImage';

type PostCardProps = {
  title: string;
  imageSource: string;
  imageAlt: string;
  description: string;
  link: string;
};

export default function PostCard({
  title,
  imageSource,
  imageAlt,
  description,
  link
}: PostCardProps) {
  return (
    <Link href={link} className="p-8 flex flex-col items-center">
      <h3 className="text-2xl text-center">{title}</h3>
      <div className="flex flex-col justify-center items-center gap-8">
        <AppImage
          source={imageSource}
          className="w-80 h-60 object-cover"
          alt={imageAlt}
        ></AppImage>
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="text-text text-center">{children}</p>,
            strong: ({ children }) => (
              <strong className="font-semibold text-text">{children}</strong>
            )
          }}
        >
          {`${description.slice(0, 150)}...`}
        </ReactMarkdown>
      </div>
    </Link>
  );
}
