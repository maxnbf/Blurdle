import React, { useState } from 'react'
import { Close, Description, Header, Modal, Row } from './style'
import xButton from '../../../x.svg'
import Toggle from 'react-toggle'

const SettingsModal = ({ setModal }) => {
  const [hardMode, setHardMode] = useState(localStorage.getItem('hard_mode') === 'true')
  const [superHardMode, setSuperHardMode] = useState(localStorage.getItem('super_hard_mode') === 'true')

  const clickedHardMode = () => {
    if (hardMode) {
      localStorage.setItem('super_hard_mode', false)
      setSuperHardMode(false)
    }

    localStorage.setItem('hard_mode', !hardMode)
    setHardMode(!hardMode)
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

  return <Modal>
            <Close src={xButton} onClick={() => setModal(false)} />
            <Header>Settings</Header>
            <Row>
                Dark Mode:
                <Toggle
                    checked={true}
                    onChange={() => {}}
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
