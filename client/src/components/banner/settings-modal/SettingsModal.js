import React, { useState } from 'react'
import { Close, Description, Header, Modal, PasswordContainer, PasswordInput, PasswordSubmit, Row } from './style'
import Toggle from 'react-toggle'
import xButtonWhite from '../../../x.svg'
import xButtonBlack from '../../../x2.svg'

const SettingsModal = ({ setModal, darkMode, setDarkMode }) => {
  const [hardMode, setHardMode] = useState(localStorage.getItem('hard_mode') === 'true')
  const [superHardMode, setSuperHardMode] = useState(localStorage.getItem('super_hard_mode') === 'true')
  const [specialMode, setSpecialMode] = useState(localStorage.getItem('special_mode') === 'true')

  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')

  const clickedHardMode = () => {
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

  const clickedSpecialMode = () => {
    if (!specialMode) {
      if (localStorage.getItem('given_password_before') === 'true') {
        setSpecialMode(true)
        localStorage.setItem('special_mode', 'true')
      } else {
        setShowPasswordInput(true)
      }
    } else {
      localStorage.setItem('special_mode', 'false')
      setSpecialMode(false)
    }
  }

  const submitPassword = () => {
    if (passwordInput === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem('special_mode', 'true')
      localStorage.setItem('given_password_before', 'true')
      setSpecialMode(true)
    } else {
      localStorage.setItem('special_mode', 'false')
      setSpecialMode(false)
    }
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
                    Extreme Mode:
                    <Toggle
                        checked={superHardMode}
                        onChange={() => { clickedSuperHardMode() }}
                    />
                </Row>
                <Description>
                        Randomly rotate the image!
                </Description>
            </div>
            <div>
                <Row>
                    Special Mode:
                    <Toggle
                        checked={specialMode}
                        onChange={() => { clickedSpecialMode() }}
                    />
                </Row>
                <Description>
                        A secret mode for select people...
                </Description>
            </div>
            {showPasswordInput &&
              <PasswordContainer>
                <PasswordInput placeholder={'Enter secret password'} value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
                <PasswordSubmit onClick={() => { submitPassword() }} >Submit</PasswordSubmit>
              </PasswordContainer>
            }
  </Modal>
}

export default SettingsModal
