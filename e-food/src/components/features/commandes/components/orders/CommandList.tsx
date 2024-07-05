import { PropsCommandType } from "../../types/interfaces";
import CommandLi from "./CommandLi";

export default function CommandList({data,handleDragStart,togle,status}:{status :string,data:PropsCommandType[],handleDragStart:any,togle:any}){


    return (
    <>
        {data.map(order => <CommandLi key={order.id} order={order} handleDragStart={handleDragStart} togle={togle} status={status}/>)}
    </>
    );
}