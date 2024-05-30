import React, { useState } from 'react';

function MyModal() {
  const [showModal, setShowModal] = useState(true);

  const handleOpenModal = () => {
    // alert(showModal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className='btn' onClick={handleOpenModal}>Open</button>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Modal Title</h2>
            <p>This is the modal content.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyModal;
