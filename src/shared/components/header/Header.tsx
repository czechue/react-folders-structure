import React, {ReactElement} from 'react'
import Container from '../container/Container'

export default function Header(): ReactElement {
  return (
    <header className="bg-gray-100 w-screen bg-gray-400 h-12">
      <Container>
        <h1 className="text-xl">React Folders Styleguide</h1>
        <div className="bg-green-200">Test</div>
      </Container>
    </header>
  )
}
