interface GlitchTextProps {
  children: string;
  className?: string;
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  return (
    <span 
      className={`glitch-text ${className}`}
      data-text={children}
    >
      {children}
    </span>
  );
};

export default GlitchText;