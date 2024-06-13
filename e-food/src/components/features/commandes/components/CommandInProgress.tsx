export function CommandInProgress({refTraitement,onDragOver,onDrop}:{refTraitement:any,onDragOver:any,onDrop:any}) {



    return (
        <>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
                <h6 className="fw-bold py-3 mb-0">Traitement</h6>
                <div className="review_task">
                    <div className="dd  d-inline-block w-100" data-plugin="nestable" style={{backgroundColor:'lightblue'}}>
                        <ol className="dd-list " ref={refTraitement} onDragOver={onDragOver} onDrop={onDrop} style={{minHeight:1000}}>
                            <li className="dd-item" data-id="3" >
                                <div className="dd-handle">
                                    <div className="task-info d-flex align-items-center justify-content-between">
                                        <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Quality Assurance
                                        </h6>
                                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                            <div className="avatar-list avatar-list-stacked m-0">
                                                {/* <img className="avatar rounded-circle small-avt" src="assets/images/xs/avatar6.jpg" alt=""> */}
                                            </div>
                                            <span className="badge bg-danger text-end mt-2">High</span>
                                        </div>
                                    </div>
                                    <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                        nec scelerisque massa.</p>
                                    <div className="tikit-info row g-3 align-items-center">
                                        <div className="col-sm">
                                            <ul className="d-flex list-unstyled align-items-center flex-wrap">
                                                <li className="me-2">
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-flag"></i>
                                                        <span className="ms-1">27 Mar</span>
                                                    </div>
                                                </li>
                                                <li className="me-2">
                                                    <div className="d-flex align-items-center">

                                                        <i className="icofont-ui-text-chat"></i>
                                                        <span className="ms-1">8</span>

                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-paper-clip"></i>
                                                        <span className="ms-1">6</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm text-end">

                                            <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Box of Crayons </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}