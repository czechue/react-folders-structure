import React, {ReactElement} from 'react'
import Container from '../container/Container'

export default function Footer(): ReactElement {
  return (
    <footer className="bg-gray-100 w-screen bg-gray-400 h-12">
      <Container>
        <span className="text-sm">React Folders Styleguide App 2020</span>
      </Container>
    </footer>
  )
}
