import { createContext, useState } from "react";
import { EventPost } from "../types/interfaces";


export const EventContext = createContext<any>("event-context");

export const EventProvider = ({children}:any) => {
    const [events, setEvents] = useState<EventPost[]>([]);
    const [event,setEvent] = useState<EventPost>();

    const updateEvents = (events:EventPost[]) => {
        setEvents(events)
      }
    
      const addEvent = (event:EventPost) => {
        setEvents([... events, event]);
      }
    
      const updateEvent = (event:EventPost) => {
        setEvent(event);
      }
    
      const removeEventById = (id:number) => {
        const newEvents = events.filter((event:EventPost) => event.code !== id);
        setEvents(newEvents);
      }

    return (
        <EventContext.Provider value={{ events, event, updateEvent,addEvent,removeEventById,updateEvents }}>
          {children}
        </EventContext.Provider>
      );

   
}