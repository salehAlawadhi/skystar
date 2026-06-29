export default function TechnicalLines({ orientation = 'diagonal', className = '', opacity = 0.08 }) {
  const bgClass = orientation === 'horizontal' ? 'bg-technical-lines-horizontal' : 'bg-technical-lines';
  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 ${bgClass} ${className}`} 
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
