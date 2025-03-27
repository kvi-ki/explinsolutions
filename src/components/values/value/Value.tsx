export type ValueProps = {
  number: string;
  value: string;
};

export default function Value({valueData}: {valueData: ValueProps}) {
  return (
    <li className="">
      <p className="">{valueData.number}</p>
      <p className="">{valueData.value}</p>
    </li>
  );
}
