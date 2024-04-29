import { cn } from '../../utils/cn';

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  value: string;
}

export default function H3({ className, value, ...props }: H3Props) {
  return (
    <h3 {...props} className={cn(`text-xl font-semibold`, className)}>
      {value}
    </h3>
  );
}
