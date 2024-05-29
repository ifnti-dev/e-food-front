
function Form({handleSubmit,handleOnChange} : {handleSubmit:any,handleOnChange:any}) {


    return(
        <>
            <form className="mt-4" onSubmit={handleSubmit}>
                <input type="number" name="id" onChange={handleOnChange} hidden/>
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example1">Titre</label>
                    <input type="text" id="form4Example1" className="form-control" name="titre" onChange={handleOnChange} />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example3">Description</label>
                    <textarea className="form-control" id="form4Example3" rows={2} name="description" onChange={handleOnChange}></textarea>
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