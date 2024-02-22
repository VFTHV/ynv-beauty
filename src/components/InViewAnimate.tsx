import { useRef, ReactNode, useEffect } from 'react';
import { useInView } from 'framer-motion';

interface InViewAnimateProps {
  children: ReactNode;
  className?: string;
}
// in view animate effect
// in view animate effect
// in view animate effect
// in view animate effect

function InViewAnimate({ children, className }: InViewAnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px 150px 0px' });

  return (
    <div
      className={className}
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </div>
  );
}

export default InViewAnimate;
