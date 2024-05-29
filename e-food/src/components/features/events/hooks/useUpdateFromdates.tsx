import { EventDropArg } from "@fullcalendar/core/index.js";
import { EventToUpadeType } from "../types/interfaces";
import putRestaurantEvents from "../api/putEvent";
import { useContext } from "react";
import { EventContext } from "../context/EventContext";

export function useUpdateFromDates() {

    const { setVisible, setLoading } = useContext(EventContext);


    // // Dragable stop 
    const eventDragStop = async (eventDrag: EventDropArg) => {


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




            setVisible(false)


        } catch (error) {


            throw error;

        }

    }

    return {
        eventDragStop
    }

}