import React, { useState } from 'react'
import { Close, Description, Header, Modal, Row } from './style'
import Toggle from 'react-toggle'
import xButtonWhite from '../../../x.svg'
import xButtonBlack from '../../../x2.svg'

const SettingsModal = ({ setModal }) => {
  const [hardMode, setHardMode] = useState(localStorage.getItem('hard_mode') === 'true')
  const [superHardMode, setSuperHardMode] = useState(localStorage.getItem('super_hard_mode') === 'true')
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark_mode') === 'true')

  const clickedHardMode = ({ darkMode }) => {
    if (hardMode) {
      localStorage.setItem('super_hard_mode', false)
      setSuperHardMode(false)
    }

    localStorage.setItem('hard_mode', !hardMode)
    setHardMode(!hardMode)
  }

  const clickDarkMode = () => {
    localStorage.setItem('dark_mode', !darkMode)
    setDarkMode(!darkMode)
  }

  const clickedSuperHardMode = () => {
    // if turning super hard mode on
    if (!superHardMode) {
      localStorage.setItem('hard_mode', true)
      setHardMode(true)
    }

    localStorage.setItem('super_hard_mode', !superHardMode)
    setSuperHardMode(!superHardMode)
  }

  return <Modal darkMode={darkMode}>
            <Close src={darkMode ? xButtonWhite : xButtonBlack} onClick={() => setModal(false)} />
            <Header>Settings</Header>
            <Row>
                Dark Mode:
                <Toggle
                    checked={darkMode}
                    onChange={() => { clickDarkMode() }}
                />
            </Row>
            <div>
                <Row>
                    Hard Mode:
                    <Toggle
                        checked={hardMode}
                        onChange={() => { clickedHardMode() }}
                    />
                </Row>
                <Description>
                    No scrolling through the options!
                </Description>
            </div>
            <div>
                <Row>
                    Super Hard Mode:
                    <Toggle
                        checked={superHardMode}
                        onChange={() => { clickedSuperHardMode() }}
                    />
                </Row>
                <Description>
                        Randomly rotate the image!
                </Description>
            </div>
  </Modal>
}

export default SettingsModal
