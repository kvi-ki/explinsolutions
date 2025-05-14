import './Input.css';

export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function FormField({ inputData }: { inputData: InputProps }) {
  return (
    <div className="field">
      <label htmlFor={inputData.name} className="label">
        {inputData.label}
      </label>

      {inputData.name === 'message' && (
        <textarea
          className="input h-44 focus:outline-none focus:border-green"
          id={inputData.name}
          name={inputData.name}
          placeholder={inputData.placeholder}
          required
        />
      )}

      {inputData.name !== 'message' && (
        <input
          className="input focus:outline-none focus:border-green"
          id={inputData.name}
          name={inputData.name}
          type={inputData.type}
          placeholder={inputData.placeholder}
          required
        />
      )}
    </div>
  );
}
