import React, { useEffect, useState } from "react";
import axios from "axios";

function Publicite() {
    const [publicites, setPublicites] = useState<any[]>([]);

    useEffect(()=>{
        loadPublicites();
    },[])
    const loadPublicites = async() => {
        const result = await axios.get('http://localhost:8085/e-food/api/v1/publicites');
        console.log(result.data);
        
        setPublicites(result.data);
        
    }
    return(
        <div className="col-12 row">

            <div className="card-group col-8" id="accordion">

                {
                    publicites.map((publicite, index)=>(
                        
                        <div className="card" key={index}>
                            <img className="card-img-top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" width={200} height={200} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{publicite.titre}</h5>
                                <p className="card-text">{publicite.description}</p>
                            </div>
                            <div className="card-footer">
                            {/* <small className="text-muted">Les actions delete edit active deactive</small> */}
                            
                            <div className="accordion"  key={index}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#ac"+index.toString()} aria-expanded="false" aria-controls="collapseOne">
                                    <i className="bi bi-three-dots"></i>
                                    </button>
                                    </h2>
                                    <div id={"ac"+index.toString()} className="accordion-collapse collapse " data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                           <div className="d-flex justify-content-between">
                                            <i className="bi bi-three-dots"></i>
                                            <i className="bi bi-three-dots"></i>
                                            <i className="bi bi-three-dots"></i>
                                            <i className="bi bi-three-dots"></i>
                                           </div>
                                    </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    ))
                    
                }
            
            </div>

            <div className="col-4 alert alert-primary">
            <form className="mt-4">
             
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example1">Titre</label>
                    <input type="text" id="form4Example1" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example3">Description</label>
                    <textarea className="form-control" id="form4Example3" rows={2}></textarea>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label fs-5" htmlFor="form4Example2">Images</label>
                    <input type="file" id="form4Example2" className="form-control" />
                </div>


               
                {/* <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                    <label className="form-check-label" htmlFor="form4Example4">
                    Send me a copy of this message
                    </label>
                </div> */}

               
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                    Enregistrer
                </button>
        </form>
            </div>
        </div>

        // <ul>
        //   {
        //     publicites.map((publicite, index)=>(

        //         <li key={index}>{publicite.titre}</li>
        //     ))
        //   }
        // </ul>
    )
    
}

export default Publicite;