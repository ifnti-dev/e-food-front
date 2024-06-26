import { useContext, useEffect, useMemo } from "react";
import { CommandContext } from "../context/ComandContext";
import { ParamCommandStatusType } from "../types/interfaces";
import fetchCommandsByStatus from "../api/fetch_commands_by_status";

export function useFetchCommandsByStatus(data:ParamCommandStatusType) {

    const { commands, loading,setLoading,updateCommands } = useContext(CommandContext);
    const {commandsEnTraitement,updateCommandsEnTraitement} = useContext(CommandContext);

    useEffect(() => { 

        async function fetchData() {
            try {
                setLoading(true);

                if (data.status == "EN_COURS") {
                    
                    const commands = await fetchCommandsByStatus(data);
                    updateCommands(commands);
                }

                if (data.status == "EN_TRAITEMENT") {


                    const commands = await fetchCommandsByStatus(data);
                    updateCommandsEnTraitement(commands);

                    
                }



                setLoading(false);

            } catch (error) {

                console.error('Error fetching commands:', error);

                
            }
        }

        fetchData();

    },[]);

    const cachedData = useMemo(() => commands, [commands]);
    const cachedDataEnTratement =  useMemo(() => commandsEnTraitement, [commandsEnTraitement]);

    return {
        cachedData,
        loading,
        cachedDataEnTratement
    }
}