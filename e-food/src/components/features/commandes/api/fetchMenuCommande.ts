import instance from "../../../utils/axios";

const url:string = "api/client/order/";

const fetchMenuCommande = async (id:string)=>{

    const response:any = await instance.get(`${url}?id=${id}`,);


    try {
        if (response.status != 200) {
            throw new Error(response.status)
        }
        
        return response.data.menus;

        
    } catch (error) {
        throw error;
    }

}






export default fetchMenuCommande;