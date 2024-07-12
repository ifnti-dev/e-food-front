export default function ModalContent({ onClose }:{onClose:any}) {
    console.log(123);
    
    return (
      <div className="modal">
        <div>I'm a modal dialog</div>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
  