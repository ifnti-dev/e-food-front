import React, { useEffect, useState } from "react";
import axios from "axios";

function Publicite() {
    const [publicites, setPublicites] = useState<any[]>([]);

    useEffect(() => {
        loadPublicites();
    }, []);

    const loadPublicites = async () => {
        const result = await axios.get('http://localhost:8085/e-food/api/v1/publicites');
        setPublicites(result.data);
    }

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {publicites.map((publicite, index) => (
                            <div className="col" key={index}>
                                <div className="card">
                                    <img className="card-img-top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" width={200} height={200} alt="Card image cap" />
                                    <div className="card-body" style={{ maxHeight: "170px", overflow: "hidden" }}>
                                        <h5 className="card-title">{publicite.titre}</h5>
                                        <p className="card-text text-center">{publicite.description.length > 30 ? publicite.description.slice(0, 30) + "..." : publicite.description}</p>
                                        {publicite.description.length > 30 && (
                                            <button className="btn btn-link" onClick={() => toggleExpand(index)}>
                                                {expandedIndex === index ? "Lire moins" : "Lire la suite"}
                                            </button>
                                        )}
                                    </div>
                                    <div className="card-footer">
                                        <div className="accordion" key={index}>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#ac" + index.toString()} aria-expanded="false" aria-controls="collapseOne">
                                                        <i className="bi bi-three-dots"></i>
                                                    </button>
                                                </h2>
                                                <div id={"ac" + index.toString()} className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        <div className="d-flex justify-content-between">
                                                            <i className="bi bi-trash text-danger fs-5"></i>
                                                            <i className="bi bi-pen text-primary fs-5 mx-2"></i>
                                                            <i className="bi bi-three-dots fs-5"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block overflow-auto" style={{ maxHeight: "80vh" }}>
                    <div className="alert alert-primary">
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

                            <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                Enregistrer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publicite;
