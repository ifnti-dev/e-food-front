import { createContext, useState } from "react";
import {  FullCalendarProps } from "../types/interfaces";


export const EventContext = createContext<any>("event-context");

export const EventListProvider = ({children}:{children:any}) => {

    const [events, setEvents] = useState<FullCalendarProps[]>([]);
    const [event,setEvent] = useState<FullCalendarProps>();
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    const updateEvents = (events:FullCalendarProps[]) => {
        setEvents(events)
      }
      
    
      const addEvent = (event:FullCalendarProps) => {
        
        setEvents([... events, event]);
      }
    
      const updateEvent = (event:FullCalendarProps) => {
        setEvent(event);
      }
    
      const removeEventById = (id:string) => {
        const newEvents = events.filter((event:FullCalendarProps) => event.id !== id);
        setEvents(newEvents);
      }

    return (
        <EventContext.Provider value={{ events, event, updateEvent,addEvent,removeEventById, updateEvents,visible,setVisible,loading,setLoading }}>
          {children}
        </EventContext.Provider>
      );

   
}