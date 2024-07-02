import { UpdateStatusType } from "../types/interfaces";
import instance from "../../../utils/axios";

const putUrl: string = "api/client/order/status";

// POST /api/restaurant/events
const putCommandStatus = async (body: UpdateStatusType) => {

    try {

        if (body.id != '') {
            
            const response: any = await instance.put(`${putUrl}/`, body = body,)


            if (response.status != 200) {
                throw new Error("Network in not available")
            }
        }

        return {
            ok: true
        };


    } catch (error) {
        throw error;
    }
}

export default putCommandStatus;