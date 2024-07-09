import un_axios from "../components/features/fayssol/utils/axios";

const getPubUrl: string = "/restaurant";

export const GET_RESTOS_PUB = "GET_RESTOS_PUB";
export const getPublicites = (restaurantId:number) => {
    return (dispatch:any) => {
        return un_axios.get(`${getPubUrl}/${restaurantId}`)
        .then(res => {
            console.log(res);
            dispatch({type:GET_RESTOS_PUB, playload:res.data});
        });
        
    }
}