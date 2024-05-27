import { EventToSend } from "../types/interfaces";
import instance from "../utils/axios";

const postEventUrl: string = "api/restaurant/events";

// POST /api/restaurant/events
const postRestaurantEvents = async (body: EventToSend) => {
    const response: any = await instance.post(`${postEventUrl}/`, body = body,)


    

    try {
        if (response.status != 200) {
            throw new Error("Network in not available")
        }


        return;


    } catch (error) {
        throw error;
    }
}

export default postRestaurantEvents;