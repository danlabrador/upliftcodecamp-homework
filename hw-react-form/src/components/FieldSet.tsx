interface FieldSetProps {
  children: React.ReactNode;
}
export function FieldSet({ children }: FieldSetProps): JSX.Element {
  return (
    <fieldset className='mb-4'>
      {children}
    </fieldset>
  );
}
