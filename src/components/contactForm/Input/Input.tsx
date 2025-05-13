export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({ inputData }: { inputData: InputProps }) {
  return (
    <div>
      <label htmlFor={inputData.name}>{inputData.label}</label>

      {inputData.name === 'message' && (
        <textarea id={inputData.name} placeholder={inputData.placeholder} />
      )}

      {inputData.name !== 'message' && (
        <input
          id={inputData.name}
          type={inputData.type}
          placeholder={inputData.placeholder}
        />
      )}
    </div>
  );
}
