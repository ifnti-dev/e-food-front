import { useEffect,  } from "react";
import { ParamCommandStatusType } from "../types/interfaces";
import fetchMenuCommande from "../api/fetchMenuCommande";

export function useFetchMenusCommande(id:string) {

    
    let data:any;

    useEffect(() => { 

        async function fetchData() {
            try {
               
                data = fetchMenuCommande(id);

            } catch (error) {

                console.error('Error fetching commands:', error);

                
            }
        }

        fetchData();

    },[]);

    // const cachedData = useMemo(() => commands, [commands]);
    // const cachedDataEnTratement =  useMemo(() => commandsEnTraitement, [commandsEnTraitement]);

    console.log(data);
    

    return {
        data,
      
    }
}