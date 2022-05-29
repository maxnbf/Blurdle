import React, { useMemo, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Close, CopiedModal, ShareButton, Text } from './style'
import xButton from '../../../x.svg'

const Share = ({ guesses, person }) => {
  const text = useMemo(() => {
    const specialMode = localStorage.getItem('special_mode') === 'true'

    const start = new Date(specialMode ? '5/28/2022' : '5/9/2022')
    const end = new Date()
    const dayNumber = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
    )

    const currStreak = parseInt(localStorage.getItem('currStreak'))
    const numGuesses = guesses.indexOf(person) + 1

    let includeLink = ''

    if (
      !(navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i))
    ) {
      includeLink = 'https://blurdle.me/'
    }
    const hardMode = localStorage.getItem('hard_mode') === 'true' ? '*' : ''
    const superHardMode = localStorage.getItem('super_hard_mode') === 'true' ? '*' : ''

    const result = Array.from(Array(5).keys())
      .map((index) => {
        if (guesses[index] !== person && index < guesses.length) {
          return '🟥'
        } else if (guesses[index] === person) {
          return '🟩'
        } else {
          return '⬜'
        }
      })
      .join('')
    return [
      `${specialMode ? 'Special Blurdle' : 'Blurdle'} #${dayNumber} ${numGuesses}/5${hardMode}${superHardMode}\n`,
      result,
      `\nCurrent streak: ${currStreak}\n${includeLink}`
    ].join('\n')
  }, [guesses, person])

  const [copied, setCopied] = useState(false)

  const shareClicked = () => {
    if (
      navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i)
    ) {
      if (navigator.share) {
        navigator.share({
          title: 'Blurdle - The celebrity guessing game',
          text,
          url: 'https://blurdle.me/'
        })
      }

      // .then(() => console.log('Successful share'))
      // .catch((error) => console.log('Error sharing', error))
    } else {
      setCopied(true)
    }
  }

  return (
    <>
      <CopyToClipboard
        text={text}
        options={{
          format: 'text/plain'
        }}
        onCopy={() => shareClicked()}
      >
        <ShareButton>Share</ShareButton>
      </CopyToClipboard>
      {copied && (
        <CopiedModal>
          <Close src={xButton} onClick={() => setCopied(false)} />
          <Text>Copied to clipboard</Text>
        </CopiedModal>
      )}
    </>
  )
}

export default Share
