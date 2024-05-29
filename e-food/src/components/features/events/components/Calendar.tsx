// import FullCalendar from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {  } from "@fullcalendar/interaction" // needed for dayClick
import { DateSelectArg, EventClickArg, EventDropArg } from '@fullcalendar/core/index.js'
import "../../../../App.css";
import { useEffect, useState } from 'react';
import { EventPost, EventToSend, EventToUpadetType, FullCalendarProps, SwalDeletType, SwalSuccess, UpdateFormType } from "../types/interfaces";

import Spinner from './Spinner';
import { Success } from '../../../sweetalerts/Success';
import { DeleteAlert } from '../../../sweetalerts/DeleteAlert';
// import putRestaurantEvents from '../api/putEvent';
import { useFetchEvent } from '../hooks/useFetchEvent';
import { usePostEvent } from '../hooks/usePostEvent';


const Calendar = () => {

   

    const [isDeleteModal, setDeleteModal] = useState(0)

    const [show, setShowUpdateModal] = useState(false)

    const [event, setEvent] = useState<UpdateFormType>({ title: "", description: '' });
   


    let successProps: SwalSuccess = {
        title: "Valide !",
        text: "Opération réussie !"
    }

    const deleteProps: SwalDeletType = {
        title: "Action non reversible !",
        text: "Changement des dates de l'evénement",
        text_delete: "Changement non efféctué",
        text_success: "Opération réussie !"
    }





    /**
     * @param {EventClickArg} event
     */
    const updateEvent = (event: EventClickArg) => {
        sessionStorage.setItem("code", event.event.id);
        sessionStorage.setItem("debut", event.event.startStr);
        sessionStorage.setItem("fin", event.event.endStr);



        setEvent({ title: event.event.title, description: event.event.extendedProps.description })
        updateFormModal()

    }

    const updateFormModal = () => {
        setShowUpdateModal(!show);
    }

    //Update event handler from title and description 
    // const updateSubmit = async (object: UpdateFormType) => {
    //     // Récupérer des données depuis sessionStorage
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
    //         setIsLoading(true);


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

 

    // // Dragable stop 
    // const eventDragStop = async (eventDrag: EventDropArg) => {
    
        
    //     const preparedToPut: EventToUpadetType = {
    //         date_debut:eventDrag.event.startStr,
    //         date_fin: eventDrag.event.endStr,
    //         description: eventDrag.event.extendedProps.description,
    //         titre: eventDrag.event.title,
    //         id_restaurant: 1,
    //         code: parseInt(eventDrag.event.id)
    //     }

    //     try {
    //         setIsLoading(true);

    //         await putRestaurantEvents(preparedToPut);


    //         setIsLoading(false);

            
    
          
    //         setVisible(false)


    //     } catch (error) {


    //         throw error;

    //     }
         

        
    // }
    //Field onChange
    const OnChangeUpdate = (ev: {
        target: { name: any; value: any; }
    }) => {
        setEvent({ ...event, [ev.target.name]: ev.target.value })

    }

    //Fetch event handler hook
    const {loading, events} = useFetchEvent()

    //post event handler

    const {onSubmit,visible,setVisible,toggleModal,modal,handleSelect,onChange } = usePostEvent()
    



    return (

        
        <div className='position-relative'>

            {/* <UpdateForm props={{
                title: event.title,
                description: event.description
            }}
                show={show}
                toggleModalUp={updateFormModal}
                onSubmit={updateSubmit}
                onChange={OnChangeUpdate}
            /> */}

            {/* <!-- Modal Members--> */}

            <Success isVisible={visible} visible={setVisible} props={successProps} />

            <DeleteAlert visible={isDeleteModal} setVisible={setDeleteModal} props={deleteProps}  />

            {modal && <div className="modal overlay fade show d-block" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true" role='dialog' >
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  fw-bold" id="addUserLabel">Ajouter un évenement</h5>
                            <button type="button" className="btn-close" onClick={toggleModal}></button>
                        </div>

                        <form action="" method="post" onSubmit={onSubmit}>
                            <div className="modal-body">
                                <div className="inviteby_title">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Le titre" name='title' onChange={onChange} value={events.title} />

                                    </div>
                                </div>

                                <div className="inviteby_description">
                                    <div className="input-group mb-3">
                                        <textarea className='form-control' name="description" id="" placeholder='Une description...' onChange={onChange} value={events.description}></textarea>

                                    </div>


                                </div>

                                <div className='float-left mb-5'>
                                    <input type="time" name="startTime" id="" />
                                    <input type="time" name="endTime" id="" />
                                </div>

                                <button className="btn btn-dark" type="submit" id="button-addon2">Ajouter</button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>}

            <Spinner value={loading} />


            <div>
                <FullCalendar
                    eventTimeFormat={{ // like '14:30:00'
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        meridiem: false
                    }}
                    displayEventTime={true}
                    eventBorderColor='#123458'
                    height={800}
                    locale={'fr'}
                    weekNumbers={false}
                    timeZone={'UTC'}
                    buttonText={{
                        today: 'Aujourd\'hui',
                        month: 'Mois',
                        week: 'Semaine',
                        day: 'Jour',
                        list: 'list'
                    }}

                    fixedWeekCount={true}
                    // titleRangeSeparator='\u2000'
                    // footerToolbar={true}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridWeek,dayGridDay' // user can switch between the two
                    }}
                    select={handleSelect}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridWeek"
                    // dateClick={handleDateClick}
                    selectable={true}
                    weekends={true}
                    events={events}
                    eventColor='white'
                    eventDisplay='inverse-background'
                    eventBackgroundColor='#484c7f'
                    progressiveEventRendering={true}
                    eventClick={updateEvent}
                    eventLongPressDelay={1}
                    editable={true}
                    // eventDrop={eventDragStop}
                    

                    businessHours={[ // specify an array instead
                        {
                            daysOfWeek: [1, 2, 3], // Monday, Tuesday, Wednesday
                            startTime: '08:00', // 8am
                            endTime: '18:00' // 6pm
                        },
                        {
                            daysOfWeek: [4, 5], // Thursday, Friday
                            startTime: '10:00', // 10am
                            endTime: '16:00' // 4pm
                        }
                    ]}





                />
            </div>



        </div>
    )
}

export default Calendar
