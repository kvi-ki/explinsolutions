export type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

export default function FormField({ inputData }: { inputData: InputProps }) {
  return (
    <div className="flex flex-col gap-2 my-8">
      <label
        htmlFor={inputData.name}
        className="pl-3 text-text text-base font-light"
      >
        {inputData.label}
      </label>

      {inputData.name === 'message' && (
        <textarea
          className="p-3 rounded-xl text-base text-text font-light border border-whiteColor bg-whiteColor h-44 focus:outline-none focus:border-accent"
          id={inputData.name}
          name={inputData.name}
          placeholder={inputData.placeholder}
          required
        />
      )}

      {inputData.name !== 'message' && (
        <input
          className="p-3 rounded-xl text-base text-text font-light border border-whiteColor bg-whiteColor focus:outline-none focus:border-accent"
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
