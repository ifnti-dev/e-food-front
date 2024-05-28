import { DateSelectArg } from "@fullcalendar/core/index.js";

interface EventSelect {
    event: DateSelectArg;
   
}


interface EventProps {
    event: EventSelect;
}
/**
 * @param {number} code
 * @param {number} date_debut
 */
interface EventPost{
    code:number;
    date_debut:number;
    titre:string;
    description:string;
    date_fin:number;
    id_restaurant:number;
    
}

interface EventToUpadetType{
    code:number;
    date_debut:string;
    titre:string;
    description:string;
    date_fin:string;
    id_restaurant:number;
    
}

interface EventToSend{
   
    date_debut:string;
    titre:string;
    description:string;
    date_fin:string;
    id_restaurant:number;
    
}

interface SwalSuccess{
    title:string;
    text:string;
   
}

interface SwalDeletType{
    title:string;
    text:string;
    text_success:string;
    text_delete:string;
   
}


interface FullCalendarProps {
    id:string;
    title: string;
    start: string;
    end: string;
    description: string;
    display:string
}

interface UpdateFormType{
    title:string;
    description:string
    
}


export type { EventProps, EventSelect,EventPost,FullCalendarProps,EventToSend,SwalSuccess,UpdateFormType,SwalDeletType,EventToUpadetType };