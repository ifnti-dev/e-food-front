import { DateSelectArg } from "@fullcalendar/core/index.js";

interface EventSelect {
    event: DateSelectArg;
   
}

interface ShowModal{
    modal:boolean;
    setModal:React.Dispatch<React.SetStateAction<boolean>>;
}

interface EventProps {
    event: EventSelect;
}

interface EventPost{
    code:number;
    date_debut:number;
    titre:string;
    description:string;
    date_fin:number;
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


interface FullCalendarProps {
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


export type { EventProps, EventSelect,EventPost,FullCalendarProps,EventToSend,SwalSuccess,UpdateFormType };