import { EventClickArg } from "@fullcalendar/core/index.js";
import { useContext, useRef, useState } from "react";
import { EventContext } from "../context/EventContext";
import { DeleteEventType, EventToUpadeType,  UpdateFormType } from "../types/interfaces";
import putRestaurantEvents from "../api/putEvent";
import deleteEventFromRestaurant from "../api/deleteEvent";



export function useUpdateFromTitleAndDes() {

    const codeRef = useRef<string>()
    const debutRef = useRef<string>()
    const finRef = useRef<string>()

    const { setLoading, setVisible, removeEventById,visible } = useContext(EventContext)
    const [show, setShowUpdateModal] = useState(false)
    const [deleteModal,setDeleteModal] = useState(false)
    const [event, setEvent] = useState<UpdateFormType>({
        title: '',
        description: '',
        
    });

    const handleUpdateEvent = (event: EventClickArg) => {

        const current:Date|null = new Date();

        const startDate = new Date(event.event.startStr);

        if (current > startDate ) {
            
            // setVisible(!visible);

            return ;
        }

        codeRef.current = event.event.id;
        debutRef.current = event.event.startStr;
        finRef.current = event.event.endStr;

        setEvent({ title: event.event.title, description: event.event.extendedProps.description })

        updateFormModal()

    }

   


    //Field onChange
    const OnChangeUpdate = (ev: {
        target: { name: any; value: any; }
    }) => {
        setEvent({ ...event, [ev.target.name]: ev.target.value })

    }

    const updateFormModal = () => {
        setShowUpdateModal(!show);
    }


    //Update event handler from title and description 
    const updateSubmit = async (object: UpdateFormType) => {

        //TODOS: remplace id restaurant
        const preparedToPut: EventToUpadeType = {
            date_debut: debutRef.current,
            date_fin: finRef.current,
            description: object.description?.toString(),
            titre: object.title?.toString(),
            id_restaurant: 1,
            code: codeRef.current
        }

        
        

        try {
            setLoading(true);

            await putRestaurantEvents(preparedToPut);

            setLoading(false);

            setVisible(!visible)


            setShowUpdateModal(!show);

            //FixMe: Set errors
        } catch (error) {


            throw error;

        }

    }

    const deleteEvent = async () => {

        const body: DeleteEventType = {
            id_restaurant: '1',
            code: codeRef.current
        }

        try {

            setLoading(true);
            //backend fetch
            await deleteEventFromRestaurant(body);

            setLoading(false);
            //hidden modal
            setShowUpdateModal(!show);

            removeEventById(codeRef.current);

        } catch (error) {


        }


    }


    return {
        event,
        handleUpdateEvent,
        OnChangeUpdate,
        updateFormModal,
        show,
        updateSubmit,
        deleteEvent,
        deleteModal,
        setDeleteModal
    }

}