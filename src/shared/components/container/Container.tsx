import React, { ReactElement } from 'react';

interface ContainerProps {
  children: string | ReactElement | ReactElement[];
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps): ReactElement {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}
