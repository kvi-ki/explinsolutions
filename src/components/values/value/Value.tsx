import './Value.css';

export type ValueProps = {
  number: string;
  value: string;
};

export default function Value({ valueData }: { valueData: ValueProps }) {
  return (
    <li className="value-item">
      <p className="value-number">{valueData.number}</p>
      <p className="value-text">{valueData.value}</p>
    </li>
  );
}
