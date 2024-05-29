
import { DeleteEventType } from "../types/interfaces";
import instance from "../utils/axios"

const deleteEventUrl: string = "api/restaurant/events";

const deleteEventFromRestaurant = async (body:DeleteEventType)=>{


    try {
        const response:any = await instance.delete(`${deleteEventUrl}/`, {data:body})

        if (response.status != 200) {

            throw new Error("Network in not available")
        }
        return;
    } catch (error) {
        
    }


}

export default deleteEventFromRestaurant