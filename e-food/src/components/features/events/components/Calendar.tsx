// import FullCalendar from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { DateSelectArg } from '@fullcalendar/core/index.js'
import "../../../../App.css";
import { useEffect, useState } from 'react';
import { EventPost, EventToSend, FullCalendarProps } from "../types/interfaces";

import getRestaurantEvents from '../api/getEvent';
import postRestaurantEvents from '../api/postEvent';

const Calendar = () => {
    const [modal, setModal] = useState(false)

    const [events, setEvents] = useState<FullCalendarProps>({
        title: '',
        description: '',
        start: '',
        end: ''
    })

    const [eventsFull, setEventsFull] = useState<FullCalendarProps[]>([]);
    const [event, setEvent] = useState<FullCalendarProps>();

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
        const preparedToPost:EventToSend = {
            date_debut:events.start,
            date_fin:events.end,
            description:events.description,
            titre:events.title,
            id_restaurant:1
        }

        try {

            const event = await postRestaurantEvents(preparedToPost);
            console.log(event);
            

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
                    }

                   
                    
                    events.push(eventFull);
                })



                updateEvents(events);

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
    return (
        <>

            {/* <!-- Modal Members--> */}

            

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


                                <button className="btn btn-dark" type="submit" id="button-addon2">Ajouter</button>


                            </div>
                        </form>
                    </div>
                </div>
            </div>}

            <div>
                <FullCalendar

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

                    eventBackgroundColor='#378006'
                    progressiveEventRendering={true}

                />
            </div>

        </>
    )
}

export default Calendar
