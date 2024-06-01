import un_axios from "../../utils/axios";
import { PubToSend } from "../../types/interfacesPublicite";

// POST:
export const postPublicite:any = (body:PubToSend) =>{
   
        un_axios.post("", body=body).then(response =>{
            return response.data;
        }).catch(error =>{
            console.log(error);
            return error.status;
            
        });

   
        
    }

    
// GET
const getPubUrl: string = "/restaurant";
const getRestaurantPubs = async (restaurantId: number) => {
    const response: any = await un_axios.get(`${getPubUrl}/${restaurantId}`)
    
    try {
        if (response.status != 200) {
            throw new Error(response.status)
        }
        
        console.log(response );
        
        return response;

        
    } catch (error) {
        throw error;
    }
}


// export const getRestaurantPubs = (restaurantId: number) => {
    
//     un_axios.get(`${getPubUrl}/${restaurantId}`).then(response => {
//         console.log(response);
        
//     return response;

//     }).catch(error => {
//         console.log(error);
//         return error.status;
        
//     });
    
// }

// DELETE:
export const deletePublicite = (pubId: number) => {
    
    un_axios.get(`/${pubId}`).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return error.status;
        
    });
    
}

export default getRestaurantPubs;