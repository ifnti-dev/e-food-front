import { EventClickArg } from "@fullcalendar/core/index.js";
import { useContext, useRef, useState } from "react";
import { EventContext } from "../context/EventContext";
import {  UpdateFormType } from "../types/interfaces";


export function useUpdateFromTitleAndDes(){

    // const objet = useRef()

    const {setEvent,event,setLoading} = useContext(EventContext)
    const [show, setShowUpdateModal] = useState(false)


    const updateEvent = (event: EventClickArg) => {
        // sessionStorage.setItem("code", event.event.id);
        // sessionStorage.setItem("debut", event.event.startStr);
        // sessionStorage.setItem("fin", event.event.endStr);
            console.log(12323);
            


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
        // Récupérer des données depuis sessionStorage
    //     let code = sessionStorage.getItem("code");
    //     let dD = sessionStorage.getItem("debut");
    //     let dF = sessionStorage.getItem("fin");

    //     if (code === null) {
    //         code = "0"
    //     }

    //     const preparedToPut: EventToUpadetType = {
    //         date_debut: dD,
    //         date_fin: dF,
    //         description: object.description?.toString(),
    //         titre: object.title?.toString(),
    //         id_restaurant: 1,
    //         code: parseInt(code)
    //     }

    //     try {
    //         setLoading(true);


    //         await putRestaurantEvents(preparedToPut);


    //         setIsLoading(false);
    //         setShowUpdateModal(!show);
    //         setVisible(!visible)


    //     } catch (error) {


    //         throw error;

    //     }
    //     finally {
    //         sessionStorage.removeItem("code");
    //         sessionStorage.removeItem("debut");
    //         sessionStorage.removeItem("fin");
    //     }


    // }
        
    }


    

    return {
        event,updateEvent,OnChangeUpdate,updateFormModal,show,updateSubmit
    }

}