import { PropsCommandType } from "../../types/interfaces";

export default function CommandLi({ order, handleDragStart, togle, }: { order: PropsCommandType, handleDragStart: any, togle: any }) {

    let date = new Date(order.date);


    return (
        <>
            <li className="dd-item shadow-lg" key={order.id} draggable id={order.id} onDragStart={handleDragStart}
                onDragOver={(e) => e.preventDefault()} >
                <div className="dd-handle " onClick={() => togle(order.id)}>
                    <div className="task-info d-flex align-items-center justify-content-between">

                        <div className="avatar-list avatar-list-stacked d-flex align-items-center justify-content-between">
                            <h3 className="avatar rounded-circle text-center text-capitalize" >{order.nom.substring(0, 2)}</h3>

                        </div>
                        <div>
                            <span>{order.nom.toUpperCase()} {order.prenom}</span>
                        </div>
                        <div className="task-priority">

                            <span className="badge bg-success text-end">{order.montant} <span className=" ms-1">CFA</span> </span>

                        </div>
                    </div>
                    <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                        nec scelerisque massa.</p>
                    <div className="tikit-info row g-3 align-items-center">
                        <div className="col-sm">

                        </div>
                        <div className="col-sm text-end">

                            <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> {date.toUTCString()} </div>
                        </div>
                    </div>
                </div>

            </li>
        </>
    )
}