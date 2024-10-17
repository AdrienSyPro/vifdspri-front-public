interface Props {
  children: React.ReactNode,
  title: string
}

export default function Card({ children, title }: Props) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      { children }
      <h3 className="text-center font-semibold text-lg mt-4">{ title }</h3>
    </div>
  );
}