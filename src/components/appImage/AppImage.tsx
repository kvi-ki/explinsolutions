import Image from 'next/image';

type AppImageProps = {
  alt: string;
  source: string;
  className: string;
};

export default function AppImage({ alt, source, className }: AppImageProps) {
  return (
    <Image src={source} alt={alt} className={className} width={400} height={300} />
  );
}
