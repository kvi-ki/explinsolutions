import data from '../../data.json';
import Value from './value/Value';
import './Values.css';

export default function Values() {
  return (
    <ul className="values-list">
      {data.values.data.map((valueData) => (
        <Value valueData={valueData} />
      ))}
    </ul>
  );
}
