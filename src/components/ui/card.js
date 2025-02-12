export function Card({ children, className }) {
  return (
    <div className={`shadow-lg p-4 bg-white rounded-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}
