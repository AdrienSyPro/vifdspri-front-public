interface Props {
  children: React.ReactNode,
  classes?: string | undefined;
}

export default function TextBlock({ children, classes = '' }: Props) {
  return (
    <div className={`border-custom background-secondary-color lg:rounded-lg	p-5 duration-700 lg:w-1/2 mb-5 ${classes}`}>
      {children}
    </div>
  );
}