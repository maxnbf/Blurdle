import './App.css'
import Game from './components/game/Game'
import Banner from './components/banner/Banner'
import React, { useState } from 'react'
import InfoModal from './components/banner/info-modal/InfoModal'
import StatsModal from './components/banner/stats-modal/StatsModal'
import Footer from './components/footer/Footer'
import SettingsModal from './components/banner/settings-modal/SettingsModal'
const App = () => {
  const [modal, setModal] = useState(
    localStorage.getItem('new_user') === null ? 'info' : false
  )

  if (localStorage.getItem('hard_mode') == null) {
    localStorage.setItem('hard_mode', false)
  }

  if (localStorage.getItem('super_hard_mode') == null) {
    localStorage.setItem('super_hard_mode', false)
  }

  return (
    <div className="App">
      <Banner setModal={setModal} />
      <div>
        <Game />
      </div>
      {modal === 'info' && <InfoModal setModal={setModal} />}
      {modal === 'stats' && <StatsModal setModal={setModal} />}
      {modal === 'settings' && <SettingsModal setModal={setModal} />}

      <Footer />
    </div>
  )
}

export default App
