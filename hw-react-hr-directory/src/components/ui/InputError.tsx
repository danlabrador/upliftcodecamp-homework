import WarnIcon from '../../assets/warn.png';

interface InputErrorProps {
  error: { message: string } | undefined;
}

const InputError = ({ error }: InputErrorProps) => {
  return (
    <div
      className={`h-6 ${
        error
          ? 'inline-flex items-center gap-2 bg-red-500 text-white text-xs px-1.5 py-1 rounded-sm'
          : ''
      }`}
    >
      {error && <img className="h-2.5" src={WarnIcon} alt="warn icon" />}
      {error?.message}
    </div>
  );
};

export default InputError;
