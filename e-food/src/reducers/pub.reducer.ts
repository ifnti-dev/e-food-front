import { GET_RESTOS_PUB } from "../actions/pub.action";

const initialStat ={pub: "from zero"};

export default function pubReducer(state = initialStat, action:any){
    //REDUCERS
   switch (action.type) {
    case GET_RESTOS_PUB:
        return action.playload;
   
    default:
       return state;
   }

}