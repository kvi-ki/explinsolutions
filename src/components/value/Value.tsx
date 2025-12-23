import { clsx } from 'clsx';

export type ValueProps = {
  number: string;
  title: string;
  subtitle: string;
  index: number;
};

export default function Value({ number, title, subtitle, index }: ValueProps) {
  return (
    <div
      className={clsx(
        'w-36 xl:w-60 h-36 xl:h-60 rounded-full border-2 xl:border-5 uppercase text-sm xl:text-xl flex flex-col items-center justify-center p-2 xl:p-10 xl:gap-2 text-center',
        index === 0 && 'border-white',
        index === 1 && 'border-gray',
        index === 2 && 'border-black',
        index === 3 && 'border-accent'
      )}
    >
      <p className="font-extrabold text-lg xl:text-5xl">{number}</p>
      <p className="font-bold">{title}</p>
      <p className="">{subtitle}</p>
    </div>
  );
}
