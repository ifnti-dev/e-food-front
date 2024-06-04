import { useState,useEffect, useContext } from "react";
import Modal from "./Modal";
import './modal.css';
import Form from "./Form";
import HoverContext from "../../context/HoverContextTypes";
import { HoverProvider } from "../../context/HoverProvider";

function PubModal({handleSubmit, handleOnChange}:{handleSubmit:any, handleOnChange:any} ) {
  const [modal, setModal] = useState<boolean>(false);
  const [isHovered,handleMouseEnter, handleMouseLeave] = useContext(HoverContext);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
    if(modal == true){
      handleMouseLeave();
      console.log("isHovered " + isHovered);
      
    }
  }

  // const handleSuccess = () => {
  //   window.alert('Thanks for clicking!'); 
  //   toggleModal(); 
  // }

  useEffect(() => {
    console.log("le modal "+modal);
  }, [modal]);

  return (
    <>
      <button className="btn btn-primary text-center fs-5 mb-4" onClick={toggleModal}>
      <i className="bi bi-plus" aria-hidden="true"  ></i>
        Ajouter</button>
       {/* <div className="app"> */}
      {/* <h2 className="title">ReactJS Modal</h2> */}
      {/* <div> */}
        {/* <button className="modal-btn" onClick={toggleModal}> */}
        {/* <i className="bi bi-pen text-primary fs-5" aria-hidden="true"  onClick={()=>handleEdit(publicite)}></i> */}
        {/* </button> */}
      {/* </div> */}
        <HoverProvider>
          <Modal isOpen={modal}>
            <div className="modale" style={{zIndex:2000}}>
              <span onClick={toggleModal} className="closeX">X</span>
              <h3>Ajouter une publicité</h3>
                <Form handleSubmit={handleSubmit } handleOnChange={handleOnChange}  />
              
              {/* <button className="modal-btn send" onClick={handleSuccess}>Send</button>
              <button className="modal-btn close" onClick={toggleModal}>Close</button> */}
            </div>
          </Modal>
        </HoverProvider>
    {/* </div> */}
    </>
   
  );
};

export default PubModal;