import instance from "../../../utils/axios";

const url:string = "api/client/order/menus";

const fetchMenuCommande = async (id:string)=>{

    const response:any = await instance.get(`${url}?id=${id}`,);


    try {
        if (response.status != 200) {
            throw new Error(response.status)
        }
        
        return {menus:response.data.menus,livraison:response.data.livraison};

        
    } catch (error) {
        throw error;
    }

}



export default fetchMenuCommande;