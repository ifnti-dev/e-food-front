import { UpdateFormType } from "../types/interfaces";

export default function UpdateForm({ props, onSubmit, show, toggleModalUp, onChange, removeEventById }: { onChange: any, props: UpdateFormType, onSubmit: any, show: boolean, toggleModalUp: any, removeEventById: any }) {

    function submit(e: any) {
        e.preventDefault()
        //new form from 
        const formData = new FormData(e.target);
        // Return the couple changed
        onSubmit({ title: formData.get("title"), description: formData.get('description') })

    }



    if (show) {
        return <>
            <div className="modal overlay fade show d-block" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true" role='dialog' >
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content p-2">
                        <div className="modal-header">
                            <h5 className="modal-title  fw-bold" id="addUserLabel">Mettre à jour l'évenement</h5>
                            <button type="button" className="btn-close" onClick={toggleModalUp}></button>
                        </div>

                        <form method="post" onSubmit={submit}>
                            <div className="modal-body mb-4">
                                <div className="inviteby_title">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Le titre" name='title' value={props.title?.toString()} onChange={onChange} />

                                    </div>
                                </div>

                                <div className="inviteby_description">
                                    <div className="input-group mb-3">
                                        <textarea className='form-control' name="description" id="" placeholder='Une description...' value={props.description?.toString()} onChange={onChange} ></textarea>

                                    </div>
                                </div>

                            </div>



                            <button className="btn btn-dark position-absolute bottom-0 end-0 mb-2 me-2 mt-3" type="submit" id="button-addon2">Modifier</button>



                        </form>

                        <button className="btn btn-danger position-absolute bottom-0 start-0 mb-2 ms-2 mt-3" id="button-addon1" onClick={removeEventById}>Supprimer</button>

                    </div>


                </div>


            </div></>
    } else {
        return <></>
    }


}