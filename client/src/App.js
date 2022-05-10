import './App.css'
import Game from './components/game/Game'
import Banner from './components/banner/Banner'
import React, { useState } from 'react'
import InfoModal from './components/banner/info-modal/InfoModal'
import StatsModal from './components/banner/stats-modal/StatsModal'
import Footer from './components/footer/Footer'
const App = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <Banner setModal={setModal} />
      <Game />
      {modal === 'info' && <InfoModal setModal={setModal} />}
      {modal === 'stats' && <StatsModal setModal={setModal} />}

      <Footer />
    </div>
  )
}

export default App
