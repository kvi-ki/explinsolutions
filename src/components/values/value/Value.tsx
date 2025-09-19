import './Value.css';

export type ValueProps = {
  number: string;
  value: string;
};

export default function Value({ valueData }: { valueData: ValueProps }) {
  return (
    <li className="w-20 h-20 flex flex-col justify-around items-center lg:w-24 lg:h-24">
      <p className="text-base text-blackColor font-medium border-b border-accent lg:text-3xl">
        {valueData.number}
      </p>
      <p className="text-center text-sm text-text font-light lg:text-base">
        {valueData.value}
      </p>
    </li>
  );
}
