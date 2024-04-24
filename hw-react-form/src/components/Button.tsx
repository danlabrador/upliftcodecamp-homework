interface ButtonProps {
  children: React.ReactNode;
  isSubmitBtn: boolean;
  handleMouseOver?: () => void;
  isBtnDisabled?: boolean;
}
export function Button({ children, isSubmitBtn, handleMouseOver, isBtnDisabled }: ButtonProps): JSX.Element {
  const submitType = isSubmitBtn ? 'submit' : 'button';
  return (
    <button className={`bg-blue-500 hover:bg-blue-600 active:bg-indigo-700 text-white rounded-md px-4 py-2`} type={submitType} onMouseOver={handleMouseOver} disabled={isBtnDisabled}>
      {children}
    </button>
  );
}
