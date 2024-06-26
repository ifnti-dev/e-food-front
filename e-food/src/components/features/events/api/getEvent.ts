import instance from "../../../utils/axios";

const postEventUrl: string = "api/restaurant/events";

// POST /api/restaurant/events
 const getRestaurantEvents = async (restaurantId: number) => {
    const response: any = await instance.get(`${postEventUrl}/${restaurantId}`)
    
    try {
        if (response.status != 200) {
            throw new Error(response.status)
        }
        
        
        return response.data;

        
    } catch (error) {
        throw error;
    }
}

export default getRestaurantEvents;