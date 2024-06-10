import { CommandInProgress } from "./CommandInProgress";

export function CommandsList() {

    return (
        <>
            <div className="row align-items-center">
                <div className="border-0 mb-4">
                    <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                        <h3 className="fw-bold mb-0 py-3 pb-2">Commandes</h3>

                        <div className="col-auto py-2 w-sm-100">
                            <ul className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                                <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#Invoice-list" role="tab" aria-selected="true">cmds en cours</a></li>
                                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Invoice-Simple" role="tab" aria-selected="false">Cmds prise en charge</a></li>
                                <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Invoice-Email" role="tab" aria-selected="false">Cmds livrées</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row taskboard g-3 py-xxl-4">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
                    <h6 className="fw-bold py-3 mb-0">In Progress</h6>
                    <div className="progress_task">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                                <li className="dd-item" data-id="2">
                                    <div className="dd-handle">
                                        <div className="task-info d-flex align-items-center justify-content-between">
                                            <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Website Design
                                            </h6>
                                            <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                                <div className="avatar-list avatar-list-stacked m-0">
                                                    {/* <img className="avatar rounded-circle small-avt" src="assets/images/xs/avatar8.jpg" alt=""> */}
                                                </div>
                                                <span className="badge bg-success text-end mt-2">LOW</span>
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
                                                            <span className="ms-1">12 Feb</span>
                                                        </div>
                                                    </li>
                                                    <li className="me-2">
                                                        <div className="d-flex align-items-center">

                                                            <i className="icofont-ui-text-chat"></i>
                                                            <span className="ms-1">3</span>

                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center">
                                                            <i className="icofont-paper-clip"></i>
                                                            <span className="ms-1">4</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm text-end">

                                                <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Practice to Perfect </div>
                                            </div>
                                        </div>
                                    </div>

                                </li>


                                <li className="dd-item" data-id="5">
                                    <div className="dd-handle">
                                        <div className="task-info d-flex align-items-center justify-content-between">
                                            <h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Quality Assurance
                                            </h6>
                                            <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                                <div className="avatar-list avatar-list-stacked m-0">
                                                    {/* <img className="avatar rounded-circle small-avt" src="assets/images/xs/avatar4.jpg" alt=""> */}
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

                <CommandInProgress/>
            </div>
        </>
    )
}