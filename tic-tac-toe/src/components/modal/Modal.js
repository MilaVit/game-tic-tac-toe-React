import './Modal.css'

const Modal = ({activeModal, setActiveModal}) => {
 
  return (
    <div className={activeModal ? 'modal active' : 'modal'}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <h1 className='text-choose'>Выберите игрока:</h1>
        <select className='choose-player'>
          <option value='player1'>Player-X</option>
          <option value='player2'>Player-0</option>
        </select>
        <button className='btn-choose' onClick={() => {setActiveModal(false)}}>Choose</button>
      </div>
    </div>
  );
}

export default Modal;
