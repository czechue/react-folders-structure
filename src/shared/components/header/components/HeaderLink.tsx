import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface HeaderLinkProps {
  to: string;
  children: string;
}

export default function HeaderLink({ to, children }: HeaderLinkProps): ReactElement {
  return (
    <li className="pl-4">
      <Link to={to}>{children}</Link>
    </li>
  );
}
