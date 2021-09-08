import Game from './components/Game';
import './App.css';
import Modal from './components/modal/Modal';
import { useState } from 'react';


function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div className="App">
      <Game />
      <Modal activeModal={modalActive} setActiveModal={setModalActive}/>
    </div>
  )
}

export default App;
