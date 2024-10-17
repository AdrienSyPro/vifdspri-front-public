interface Props {
  children: React.ReactNode,
  classes?: string | undefined;
}

export default function TextHighlighted({ children, classes = '' }: Props) {
  return (
    <span className={`bg-yellow-300 text-black p-1 rounded font-bold ${classes}`}>
      {children}
    </span>
  );
}