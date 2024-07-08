import { useEffect, useState, } from "react";
import fetchMenuCommande from "../api/fetchMenuCommande";
import { MenuInterface } from "../types/interfaces";

export function useFetchMenusCommande(id: string) {

    const [menus, setMenus] = useState<MenuInterface[]>([]);
    const [skeleton, setSkeleton] = useState(false);
  
    console.log("out");
    


    useEffect(() => {

        async function fetchData() {

            if (id != '') {
                
                console.log("in");
                
                
                try {

                    setSkeleton(true);
                    
                    const menus = await fetchMenuCommande(id);
    
                    setMenus(menus);           
    
                    setSkeleton(false)


                } catch (error) {
    
                    console.error('Error fetching commands:', error);
    
    
                }
            }

        }


        fetchData();

    },[id]);

    // const cachedData = useMemo(() => commands, [commands]);
    // const cachedDataEnTratement =  useMemo(() => commandsEnTraitement, [commandsEnTraitement]);




    return {
        menus,
        skeleton
    }

}