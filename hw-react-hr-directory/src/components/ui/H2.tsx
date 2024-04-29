import { cn } from '../../utils/cn';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  value: string;
}

export default function H2({ className, value, ...props }: H2Props) {
  return (
    <h2 {...props} className={cn(`text-3xl font-bold`, className)}>
      {value}
    </h2>
  );
}
