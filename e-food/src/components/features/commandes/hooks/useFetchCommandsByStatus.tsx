import { useContext, useEffect } from "react";
import { CommandContext } from "../context/ComandContext";
import { ParamCommandStatusType } from "../types/interfaces";
import fetchCommandsByStatus from "../api/fetch_commands_by_status";

export function useFetchCommandsByStatus(data:ParamCommandStatusType) {

    const { commands, loading,setLoading,updateCommands } = useContext(CommandContext);

    useEffect(() => { 

        async function fetchData() {
            try {
                // setLoading(true);

                const commands = await fetchCommandsByStatus(data);

                updateCommands(commands);

                // setLoading(false);

            } catch (error) {

                console.error('Error fetching commands:', error);

                
            }
        }

        fetchData();

    },[data.status]);


    return {
        commands,
        loading
    }
}