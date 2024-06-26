
import instance from "../../../utils/axios";
import { ParamCommandStatusType } from "../types/interfaces";
const url: string = "api/client/order/all";

const fetchCommandsByStatus = async (data:ParamCommandStatusType)=>{

    const response: any = await instance.get(`${url}?page=${data.page}&size=${data.size}`,{ params: {"status":data.status}});


    try {
        if (response.status != 200) {
            throw new Error(response.status)
        }
        console.log(response.data);
        
        
        return response.data.content;

        
    } catch (error) {
        throw error;
    }

}






export default fetchCommandsByStatus;