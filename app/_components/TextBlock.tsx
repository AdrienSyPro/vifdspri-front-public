interface Props {
  children: React.ReactNode,
  classes?: string | undefined;
}

export default function TextBlock({ children, classes = '' }: Props) {
  return (
    <div className={`container mx-auto p-6 lg:w-2/3 mb-5 ${classes}`}>
      {children}
    </div>
  );
}