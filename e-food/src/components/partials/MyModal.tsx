import { useState,useEffect } from "react";
import Modal from "./Modal";
import './modal.css';
function MyModal() {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  }

  // const handleSuccess = () => {
  //   window.alert('Thanks for clicking!'); 
  //   toggleModal(); 
  // }

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <>
      <i className="bi bi-pen text-primary fs-5 m-0" aria-hidden="true"  onClick={toggleModal}></i>
       {/* <div className="app"> */}
      {/* <h2 className="title">ReactJS Modal</h2> */}
      {/* <div> */}
        {/* <button className="modal-btn" onClick={toggleModal}> */}
        {/* <i className="bi bi-pen text-primary fs-5" aria-hidden="true"  onClick={()=>handleEdit(publicite)}></i> */}
        {/* </button> */}
      {/* </div> */}

      <Modal isOpen={modal}>
        <div className="modale">
          <span onClick={toggleModal} className="closeX">X</span>
          <h3>Modifier cette publicité</h3>

          <form className="mt-4" >
                <input type="number" name="id" hidden/>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example1">Titre</label>
                    <input type="text" id="form4Example1" className="form-control" name="titre"/>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example3">Description</label>
                    <textarea className="form-control" id="form4Example3" rows={2} name="description" ></textarea>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="files">Images</label>
                    <input type="file" id="files" className="form-control" name="images" multiple/>
                </div>

                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                    Modifier
                </button>
            </form>
          


          {/* <button className="modal-btn send" onClick={handleSuccess}>Send</button>
          <button className="modal-btn close" onClick={toggleModal}>Close</button> */}
        </div>
      </Modal>
    {/* </div> */}
    </>
   
  );
};

export default MyModal;