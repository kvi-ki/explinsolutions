type ArrowButtonProps = {
  buttonClass: string;
  iconClass: string;
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ArrowButton({
  buttonClass,
  iconClass,
  label,
  handleClick
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClass}
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={iconClass}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}
