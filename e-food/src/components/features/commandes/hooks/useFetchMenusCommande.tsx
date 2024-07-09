import { useEffect, useRef, useState, } from "react";
import fetchMenuCommande from "../api/fetchMenuCommande";
import { LivraisonPropsType, MenuInterface } from "../types/interfaces";

export function useFetchMenusCommande(id: string) {

    const [menus, setMenus] = useState<MenuInterface[]>([]);
    const [livraison, setLivraison] = useState<LivraisonPropsType>({ description: "", coordonnee_x: 0.0, coordonnee_y: 0.0 });
    const [skeleton, setSkeleton] = useState(false);
    const livraisonInfoRef = useRef<LivraisonPropsType>();



    useEffect(() => {

        async function fetchData() {

            if (id != '') {

                console.log("in");


                try {

                    setSkeleton(true);

                    const menus = await fetchMenuCommande(id);


                    setMenus(menus.menus);



                    setSkeleton(false)

                    livraisonInfoRef.current = menus.livraison;

                    console.log(livraisonInfoRef.current);



                } catch (error) {

                    console.error('Error fetching commands:', error);


                }
            }

        }


        fetchData();

    }, [id]);

    // const cachedData = useMemo(() => commands, [commands]);
    // const cachedDataEnTratement =  useMemo(() => commandsEnTraitement, [commandsEnTraitement]);


    return {
        menus,
        skeleton,
        livraisonInfoRef
    }

}