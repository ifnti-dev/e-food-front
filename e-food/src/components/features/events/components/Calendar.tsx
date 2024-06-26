// import FullCalendar from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { EventDragStopArg } from "@fullcalendar/interaction" // needed for dayClick
import { DateSelectArg, EventClickArg } from '@fullcalendar/core/index.js'
import "../../../../App.css";
import { useEffect, useState } from 'react';
import { EventPost, EventToSend, FullCalendarProps, SwalSuccess, UpdateFormType } from "../types/interfaces";

import getRestaurantEvents from '../api/getEvent';
import postRestaurantEvents from '../api/postEvent';
import Spinner from './Spinner';
import { Success } from '../../../sweetalerts/Success';
import UpdateForm from './UpdateForm';
import { DeleteAlert } from '../../../sweetalerts/DeleteAlert';


const Calendar = () => {
    const [modal, setModal] = useState(false)

    const [events, setEvents] = useState<FullCalendarProps>({
        title: '',
        description: '',
        start: '',
        end: '',
        display: ''
    })
    const [isLoading, setIsLoading] = useState(false);

    const [eventsFull, setEventsFull] = useState<FullCalendarProps[]>([]);
    const [event, setEvent] = useState<UpdateFormType>({ title: "", description: '' });
    const [isVisible, setVisible] = useState(false)
    const [isDeleteModal, setDeleteModal] = useState(false)

    const [show, setShowUpdateModal] = useState(false)

    const onChange = (event: {
        target: { name: any; value: any; };

    }) => {
        setEvents({ ...events, [event.target.name]: event.target.value })
    }
    //onsubmit
    const onSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        addEvent(events);
        setModal(!modal);
        const preparedToPost: EventToSend = {
            date_debut: events.start,
            date_fin: events.end,
            description: events.description,
            titre: events.title,
            id_restaurant: 1
        }

        try {
            setIsLoading(true);
            await postRestaurantEvents(preparedToPost);

            setIsLoading(false)
            setVisible(!isVisible)


        } catch (error) {
            throw error;

        }


    }

    //Modal
    const toggleModal = () => {
        setModal(!modal)
    }



    const updateEvents = (events: FullCalendarProps[]) => {
        setEventsFull(events)
    }

    const addEvent = (event: FullCalendarProps) => {
        setEventsFull([...eventsFull, event]);
    }


    useEffect(() => {
        // fetch data
        let events: FullCalendarProps[] = [];

        async function fetchData() {
            try {

                setIsLoading(true);
                const allEvents = await getRestaurantEvents(1);



                allEvents.map((event: (EventPost)) => {

                    const dateDebut: Date = new Date(event.date_debut);

                    const dateFin: Date = new Date(event.date_fin);


                    const yearD = dateDebut.getFullYear();
                    const monthD = String(dateDebut.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const dayD = String(dateDebut.getDate()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire

                    // Créer une chaîne de caractères au format 'YYYY-MM-DD'
                    const formattedDateD = `${yearD}-${monthD}-${dayD}`;

                    const yearF = dateFin.getFullYear();
                    const monthF = String(dateFin.getMonth() + 1).padStart(2, '0'); // Ajoute un zéro devant si nécessaire
                    const dayF = String(dateFin.getDate()).padStart(2, '0'); // Ajoute un zéro devant si nécessaire

                    // Créer une chaîne de caractères au format 'YYYY-MM-DD'
                    const formattedDateF = `${yearF}-${monthF}-${dayF}`;

                    // Fullcalender objet
                    const eventFull: FullCalendarProps = {
                        title: event.titre,
                        start: formattedDateD,
                        end: formattedDateF,
                        description: event.description,
                        display: "null"
                    }



                    events.push(eventFull);

                })



                updateEvents(events);
                setIsLoading(false)

            } catch (error) {
                console.error('Error fetching events:', error);
            }

        }

        fetchData()


    }, [])


    const handleSelect = (select: DateSelectArg) => {

        
        setEvents({ ...events, start: select.startStr, end: select.endStr })

        toggleModal();


    }

    //Update event
    /** */


    const successProps: SwalSuccess = {
        title: "Valide !",
        text: "Evénement enregistré avec succès"
    }

    /**
     * @param {EventClickArg} event
     */
    const updateEvent = (event: EventClickArg) => {

        setEvent({ title: event.event.title, description: event.event.extendedProps.description })
        updateFormModal()


    }

    const updateFormModal = () => {
        setShowUpdateModal(!show);
    }

    //Update event handler
    const updateSubmit = () => {

    }
    //Field onChange
    const OnChangeUpdate = (ev: {
        target: { name: any; value: any; }
    }) => {
        setEvent({ ...event, [ev.target.name]: ev.target.value })

    }

    const lonpressEvent = () => { }



    return (
        <div className='position-relative'>

            <UpdateForm props={{
                title: event.title,
                description: event.description
            }}
                show={show}
                toggleModalUp={updateFormModal}
                onSubmit={updateSubmit}
                onChange={OnChangeUpdate}
            />

            {/* <!-- Modal Members--> */}

            <Success isVisible={isVisible} visible={setVisible} props={successProps} />

            <DeleteAlert visible={isDeleteModal} setVisible={setDeleteModal} />

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

            <Spinner value={isLoading} />


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
                    events={eventsFull}
                    eventColor='white'

                    eventBackgroundColor='#484c7f'
                    progressiveEventRendering={true}
                    eventClick={updateEvent}
                    eventLongPressDelay={1}
                    editable={true}
                    eventDragStop={function name(args: EventDragStopArg) {
                        setDeleteModal(true)

                    }}

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
