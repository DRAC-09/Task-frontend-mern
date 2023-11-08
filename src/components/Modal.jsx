/* eslint-disable react/prop-types */

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black p-4 rounded shadow-md">
        <p>Delete task permanently?</p>
        <button onClick={closeModal}>Cerrar</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
