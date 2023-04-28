/* eslint-disable react/prop-types */
import ReactModal from 'react-modal'

const EmailModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Hello</h2>
        <button onClick={onClose}>close</button>
        <div>I am a modal</div>
      </ReactModal>
    </div>
  )
}

export default EmailModal
