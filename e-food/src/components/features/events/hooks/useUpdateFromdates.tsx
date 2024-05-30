import { EventDropArg } from "@fullcalendar/core/index.js";
import { EventToUpadeType } from "../types/interfaces";
import putRestaurantEvents from "../api/putEvent";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { EventResizeDoneArg } from "@fullcalendar/interaction/index.js";

export function useUpdateFromDates() {

    const { setVisible, setLoading, visible } = useContext(EventContext);


    // // Dragable stop 
    const eventDragStop = async (eventDrag: EventDropArg | EventResizeDoneArg) => {

        let eventBackColor = eventDrag.event.backgroundColor;
        
        if (eventBackColor === 'red') {
            return eventDrag.revert()
        }


        const preparedToPut: EventToUpadeType = {
            date_debut: eventDrag.event.startStr,
            date_fin: eventDrag.event.endStr,
            description: eventDrag.event.extendedProps.description,
            titre: eventDrag.event.title,
            id_restaurant: 1,
            code: eventDrag.event.id,
        }

        try {
            setLoading(true);

            await putRestaurantEvents(preparedToPut);

            setLoading(false);

            setVisible(!visible)


        } catch (error) {


            throw error;

        }

    }

    return {
        eventDragStop
    }

}