import { useContext, useEffect } from "react";
import { CommandContext } from "../context/ComandContext";
import putCommandStatus from "../api/putCommandStatus";

export default function useRejectOrder(id:string){

    const { removeCommandById } = useContext(CommandContext);

    useEffect(()=>{

    
        removeCommandById(id);


    async function update() {
        
        await putCommandStatus({id:id,status:"REJETER"});

   }

   update();

    },[id])
   
    return{
        false:true
    }


}