import { PropsCommandType } from "../../types/interfaces";
import { ContextMenuItem, useContextMenu } from "use-context-menu";

// You can import this anywhere, just so long as it's imported once
import "use-context-menu/styles.css";
import useRejectOrder from "../../hooks/useRejectOrder";
import { useState } from "react";




export default function CommandLi({ order, handleDragStart, togle, status}: {status :string, order: PropsCommandType, handleDragStart: any, togle: any }) {

    let date = new Date(order.date);
    const [id,setId] = useState("");

    useRejectOrder(id);


        const { contextMenu, onContextMenu, onKeyDown } = useContextMenu(
        <>
          <ContextMenuItem key={order.id} dataTestId={order.id} onSelect={(e)=>{setId(order.id)}}  >Rejeter</ContextMenuItem>
         
        </>
      );


      if (status == "EN_COURS") {
        return (
            <>
    
                <div className=" position-relative">
                    <li className="dd-item shadow-lg mb-3" key={order.id} draggable id={order.id} onDragStart={handleDragStart}
                        onDragOver={(e) => e.preventDefault()} onContextMenu={onContextMenu} onKeyDown={onKeyDown} tabIndex={parseInt(order.id)} >
                        <div className="dd-handle " onClick={() => togle(order.id)}>
                            <div className="task-info d-flex align-items-center justify-content-between">
    
                                <div className="avatar-list avatar-list-stacked ">
                                    <span className="avatar rounded-circle text-center text-capitalize">{order.nom.substring(0, 2)}</span>
    
                                </div>
                                <div>
                                    <span >{order.nom.toUpperCase()} {order.prenom}</span>
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
    
                    {contextMenu}
    
    
                </div>
    
            </>
        )
    }
       else {

        return (
            <>
    
                <div className=" position-relative">
                    <li className="dd-item shadow-lg mb-3" key={order.id} draggable id={order.id} onDragStart={handleDragStart}
                        onDragOver={(e) => e.preventDefault()} >
                        <div className="dd-handle " onClick={() => togle(order.id)}>
                            <div className="task-info d-flex align-items-center justify-content-between">
    
                                <div className="avatar-list avatar-list-stacked ">
                                    <span className="avatar rounded-circle text-center text-capitalize">{order.nom.substring(0, 2)}</span>
    
                                </div>
                                <div>
                                    <span >{order.nom.toUpperCase()} {order.prenom}</span>
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
    
                    {contextMenu}
    
    
                </div>
    
            </>
        )
    }
        
      }

   