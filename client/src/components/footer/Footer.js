import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import { FooterContainer, Title, Link } from './style'

const Footer = ({ darkMode }) => {
  return (
    <FooterContainer>
      ❤️<Title darkMode={darkMode}>Blurdle?</Title>{' '}
      <Link href={'https://ko-fi.com/maxnbf'} target="_blank">
        Buy me a <FaCoffee />!
      </Link>
    </FooterContainer>
  )
}

export default Footer
