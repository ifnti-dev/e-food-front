import {  EventToUpadetType } from "../types/interfaces";
import instance from "../utils/axios";

const postEventUrl: string = "api/restaurant/events";

// POST /api/restaurant/events
const putRestaurantEvents = async (body: EventToUpadetType) => {
    
    
    const response: any = await instance.put(`${postEventUrl}/`, body = body,)


    

    try {
        if (response.status != 200) {
            throw new Error("Network in not available")
        }
        return;


    } catch (error) {
        throw error;
    }
}

export default putRestaurantEvents;