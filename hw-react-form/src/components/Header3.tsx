interface Header3Props {
  title: string;
}
export function Header3({ title }: Header3Props): JSX.Element {
  return (
    <h3 className='mb-6 text-2xl font-bold'>{title}</h3>
  );
}
