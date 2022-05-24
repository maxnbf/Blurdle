import './App.css'
import Game from './components/game/Game'
import Banner from './components/banner/Banner'
import React, { useState } from 'react'
import InfoModal from './components/banner/info-modal/InfoModal'
import StatsModal from './components/banner/stats-modal/StatsModal'
import Footer from './components/footer/Footer'
import SettingsModal from './components/banner/settings-modal/SettingsModal'
import { AppContainer } from './style'

const App = () => {
  const [modal, setModal] = useState(
    localStorage.getItem('new_user') === null ? 'info' : false
  )

  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark_mode') === 'true')

  if (localStorage.getItem('hard_mode') == null) {
    localStorage.setItem('hard_mode', false)
  }

  if (localStorage.getItem('super_hard_mode') == null) {
    localStorage.setItem('super_hard_mode', false)
  }

  return (
    <AppContainer darkMode={darkMode}>
      <Banner setModal={setModal} darkMode={darkMode} />
      <div>
        <Game darkMode={darkMode} />
      </div>
      {modal === 'info' && <InfoModal setModal={setModal} darkMode={darkMode} />}
      {modal === 'stats' && <StatsModal setModal={setModal} darkMode={darkMode} />}
      {modal === 'settings' && <SettingsModal setModal={setModal} darkMode={darkMode} setDarkMode={setDarkMode}/>}

      <Footer darkMode={darkMode} />
    </AppContainer>
  )
}

export default App
