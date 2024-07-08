import { PropsCommandType } from "../../types/interfaces";
import CommandList from "../orders/CommandList";


export default function CommandsInProgress({handleDragStart,togle ,data,status}:{status :string,handleDragStart:any,togle:any,data:PropsCommandType[]}) {

    return (
        <>
            
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4 h-100">
                    <h6 className="fw-bold py-3 mb-0">En cours</h6>
                    <div className="progress_task border rounded border-success-subtle height-status ">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list" >
                                <CommandList handleDragStart={handleDragStart} data={data} togle={togle} status={status} />
                            </ol>
                        </div>
                    </div>
                </div>


           




        </>
    )
}