interface Header2Props {
  title: string;
}
export function Header2({ title }: Header2Props): JSX.Element {
  return (
    <h2 className='mb-8 text-4xl font-bold'>{title}</h2>
  );
}
