import { useContext } from "react";
import { CommandContext } from "../context/ComandContext";
import { UpdateStatusType } from "../types/interfaces";
import putCommandStatus from "../api/putCommandStatus";

export default function useUpdateCommandStatus(param: UpdateStatusType) {

    const { commands, loading, setLoading,  } = useContext(CommandContext);
    const { commandsEnTraitement,  } = useContext(CommandContext);


    async function update() {
        
        const response:{ok:boolean} = await putCommandStatus(param);

    }

    update();


    return {
        commands,
        commandsEnTraitement
    }

}