import { PropsCommandType } from "../../types/interfaces";

export default function CommandLi({ order ,handleDragStart,togle , }: { order: PropsCommandType,handleDragStart:any,togle:any }) {



    return (
        <>
            <li className="dd-item " key={order.id} draggable id={order.id} onDragStart={handleDragStart}
                onDragOver={(e) => e.preventDefault()} >
                <div className="dd-handle " onClick={() =>togle(order.id)}>
                    <div className="task-info d-flex align-items-center justify-content-between">
                        <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">11
                        </h6>
                        <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                            <div className="avatar-list avatar-list-stacked m-0">
                                {/* <img className="avatar rounded-circle small-avt" src="assets/images/xs/avatar8.jpg" alt=""> */}
                            </div>
                            <span className="badge bg-success text-end mt-2">{order.montant}</span>
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
        </>
    )
}