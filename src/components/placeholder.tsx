export function Placeholder({
  label,
  className = "",
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`placeholder-box ${className}`} style={style}>
      INSERT: {label}
    </div>
  );
}
