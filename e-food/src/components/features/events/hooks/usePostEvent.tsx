import { useContext, useState } from "react";
import { EventToSend, FullCalendarProps } from "../types/interfaces";
import postRestaurantEvents from "../api/postEvent";
import { EventContext } from "../context/EventContext";
import { DateSelectArg } from "@fullcalendar/core/index.js";

export function usePostEvent() {

    const [modal, setModal] = useState(false)

    const [eventsP, setEventsP] = useState<FullCalendarProps>({
        id: '',
        title: '',
        description: '',
        start: '',
        end: '',
        display: '',
        color: '#f19828',
        textColor: '',
        status: '',
        progress: { cusumme: 0, total: 0 }
    })

    // Context Event 
    const { visible, setVisible, loading, setLoading, addEvent } = useContext(EventContext);


    const toggleModal = () => {
        setModal(!modal)
    }
    const handleSelect = (select: DateSelectArg) => {
        const current = new Date();
        const startDate = new Date(select.startStr);

        if (current > startDate) {


            return;
        }

        setEventsP({ ...eventsP, start: select.startStr, end: select.endStr })

        toggleModal();


    }

    const onChange = (event: {
        target: { name: any; value: any; };

    }) => {
        setEventsP({ ...eventsP, [event.target.name]: event.target.value })
    }


    //onsubmit
    const onSubmit = async (event: { preventDefault: () => void; }) => {

        event.preventDefault();



        setModal(!modal);
        const preparedToPost: EventToSend = {
            date_debut: eventsP.start,
            date_fin: eventsP.end,
            description: eventsP.description,
            titre: eventsP.title,
            id_restaurant: 1
        }

        try {
            setLoading(true);

            await postRestaurantEvents(preparedToPost);

            setVisible(!visible)

            setLoading(false)

            addEvent(eventsP);

            //FixMe: Add state error

        } catch (error) {
            throw error;

        }


    }

    return {
        onSubmit,
        modal,
        setModal,
        visible,
        setVisible,
        pL: loading,
        toggleModal,
        handleSelect,
        onChange
    }


}