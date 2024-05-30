
function Form({handleSubmit,handleOnChange, rest} : {handleSubmit:any,handleOnChange:any, rest:any}) {



    <div className="modal fade" id="exampleModalLive" tabIndex={-1}>
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>Woohoo, you're reading this text in a modal!</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

    return(
        <>
            <form className="mt-4" onSubmit={handleSubmit}>
                <input type="number" name="id" onChange={handleOnChange} hidden/>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example1">Titre</label>
                    <input type="text" id="form4Example1" className="form-control" name="titre" onChange={handleOnChange} value={rest.titre}/>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example3">Description</label>
                    <textarea className="form-control" id="form4Example3" rows={2} name="description" onChange={handleOnChange}>{rest.description}</textarea>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="files">Images</label>
                    <input type="file" id="files" className="form-control" name="images" onChange={handleOnChange} multiple/>
                </div>

                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                    Enregistrer
                </button>
            </form>
        </>
    )
    
}

export default Form;