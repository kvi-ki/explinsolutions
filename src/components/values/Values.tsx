import data from '../../data.json';
import Value from './value/Value';
import './Values.css';

export default function Values() {
  return (
    <ul className="absolute right-0 bottom-0 bg-whiteColor rounded-tl-xl p-2 flex justify-around md:w-2/4 xl:w-2/5">
      {data.values.data.map((valueData) => (
        <Value valueData={valueData} key={valueData.value} />
      ))}
    </ul>
  );
}
