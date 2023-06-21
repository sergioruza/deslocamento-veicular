interface SpanProps<T> {
  texto: string;
  onClick?: () => void;
  info?: T;
}

function Span<T>({ onClick, texto }: SpanProps<T>) {
  return <span onClick={onClick}>{texto}</span>;
}

export default Span;
