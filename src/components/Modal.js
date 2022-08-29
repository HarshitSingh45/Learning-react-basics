import './Modal.css';
import React from 'react'

function Modal({setCloseModal}) {
  return (
    <div className='modalBackGround'>
      <div className="modalContainer">
          <div className="close">
              <button onClick={() => setCloseModal(false)}>X</button>
          </div>
          <div className="title"> <h1>Are You Sure You Want to Continue?</h1></div>
          <div className="body"><p>The next page looks amazing. Hope you want to go there!</p></div>
          <div className="foot">
              <button id='cancelBtn' onClick={() => setCloseModal(false)}>Cancel</button>
              <button>Continue</button>
          </div>
      </div>
    </div>
  )
}

export default Modal
