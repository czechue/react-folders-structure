import React, {ReactElement} from 'react'

interface ContainerProps {
  children: ReactElement | ReactElement[]
}

export default function Container({children}: ContainerProps): ReactElement {
  return <div className="container mx-auto">{children}</div>
}
