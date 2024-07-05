import { PropsCommandType } from "../../types/interfaces";
import CommandList from "../orders/CommandList";


export default function CommandsInProcessing({refTraitement,onDragOver,onDrop ,data ,togle, handleDragStart,status }:{status :string,refTraitement:any,onDragOver:any,onDrop:any ,data:PropsCommandType[], togle:any,handleDragStart:any }) {

    return (
        <>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-0 mt-sm-0 mt-0">
                <h6 className="fw-bold py-3 mb-0"> En Traitement</h6>
                <div className="review_task border rounded height-status">
                    <div className="dd  d-inline-block w-100 " data-plugin="nestable" >
                        <ol className="dd-list " ref={refTraitement} onDragOver={onDragOver} onDrop={onDrop} >

                        <CommandList handleDragStart={handleDragStart} data={data} togle={togle} status={status} />

                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}