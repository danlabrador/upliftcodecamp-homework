interface ContainerProps {
  children: React.ReactNode;
}
export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className='container px-8 pb-8'>
      {children}
    </div>
  );
}
