import { useEffect, useState } from "react";
import  getRestaurantPubs  from "../../dao/api/apiPublicite";
// import { Publicite } from '../../types/interfacesPublicite'; 
import {PubliciteList} from "./PubliciteList";

function Publicites(){
    const [publicites, setPublicites] = useState<any[]>([]);
    // const [formData, setFormData] = useState({restaurantId:1,titre:"",description:"",imagesIds:[]});
    const [isLoad, setIsLoad] = useState(false);
    // const [formDataEdit, setFormDataEdit] = useState({restaurantId:1,titre:"fgr",description:"15",imagesIds:[]})

    useEffect(() => {
        fetchData();
    }, []);

    
    
    async function fetchData() {
        try {

            setIsLoad(true);
            const allPub = await getRestaurantPubs(1);
            if (allPub.status === 200) {
                setIsLoad(false);
                setPublicites(allPub.data);
                console.log("main****");
                
              console.log(allPub.data );
              console.log("affichage publicites");
              console.log(publicites);
              
              
              
            } else {
                console.log("non status");
                setIsLoad(true);
            }
            
        } catch (error) {
            setIsLoad(true);
            console.log(error);
        }
        console.log(isLoad);
        
    }    


    return(
        <>
            <PubliciteList  isLoading={isLoad} publicites={publicites}/>
        </>
    )
}

export {Publicites};