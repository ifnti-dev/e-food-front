import {  useEffect, useState,  } from "react";
import fetchMenuCommande from "../api/fetchMenuCommande";

export function useFetchMenusCommande(id:string) {

    const [menus, setMenus] = useState();
   
    useEffect(() => { 

        async function fetchData() {
            
            
            try {
               
               const menus = await fetchMenuCommande(id);

                setMenus(menus);
              

            } catch (error) {

                console.error('Error fetching commands:', error);

                
            }
        }

        
fetchData();
    },[id]);

    // const cachedData = useMemo(() => commands, [commands]);
    // const cachedDataEnTratement =  useMemo(() => commandsEnTraitement, [commandsEnTraitement]);


    

    return{
        menus
    }

}