import './Input.css';

export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({ inputData }: { inputData: InputProps }) {
  return (
    <div className="field">
      <label htmlFor={inputData.name} className="label">
        {inputData.label}
      </label>

      {inputData.name === 'message' && (
        <textarea
          className="input"
          id={inputData.name}
          placeholder={inputData.placeholder}
          required
        />
      )}

      {inputData.name !== 'message' && (
        <input
          className="input"
          id={inputData.name}
          type={inputData.type}
          placeholder={inputData.placeholder}
          required
        />
      )}
    </div>
  );
}
