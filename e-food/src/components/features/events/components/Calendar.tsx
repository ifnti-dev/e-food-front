// import FullCalendar from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin, { EventDragStartArg } from "@fullcalendar/interaction" // needed for dayClick
import "../../../../App.css";
import Spinner from './Spinner';
import { useFetchEvent } from '../hooks/useFetchEvent';
import { usePostEvent } from '../hooks/usePostEvent';
import { useUpdateFromDates } from '../hooks/useUpdateFromdates';
import { useUpdateFromTitleAndDes } from '../hooks/useUpdateFromTitleAndDes';
import UpdateForm from './UpdateForm';
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid';



const Calendar = () => {


    //Fetch event handler hook
    const { loading, events } = useFetchEvent()

    //post event handler
    const { onSubmit, toggleModal, modal, handleSelect, onChange } = usePostEvent()

    //update dates from drapstop event
    const { eventDragStop } = useUpdateFromDates();
    //Update from title and description 
    const { event, handleUpdateEvent, OnChangeUpdate, updateFormModal, show, updateSubmit, deleteEvent,setDeleteModal,deleteModal } = useUpdateFromTitleAndDes();


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
                removeEventById={deleteEvent}
            />

            {/* <!-- Modal Members--> */}

            {/* <Success isVisible={visible} visible={setVisible} props={successProps} /> */}

            {/* <DeleteAlert visible={isDeleteModal} setVisible={setDeleteModal} props={deleteProps}  /> */}

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

            <Spinner value={loading} />


            <div>
                <FullCalendar
                    allDayText={'Journée'}
                    displayEventTime={true}
                    eventBorderColor='#f19828'
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

                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay' // user can switch between the two
                    }}
                    select={handleSelect}
                    plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    selectable={true}
                    weekends={true}
                    events={events}
                    eventStartEditable={true}
                    progressiveEventRendering={true}
                    eventClick={handleUpdateEvent}
                    eventLongPressDelay={1}
                    editable={true}
                    eventColor='red'
                    eventDrop={eventDragStop}

                    eventResize={eventDragStop}
                // businessHours={[ // specify an array instead
                //     {
                //         daysOfWeek: [1, 2, 3], // Monday, Tuesday, Wednesday
                //         startTime: '08:00', // 8am
                //         endTime: '18:00' // 6pm
                //     },
                //     {
                //         daysOfWeek: [4, 5], // Thursday, Friday
                //         startTime: '10:00', // 10am
                //         endTime: '16:00' // 4pm
                //     }
                // ]}





                />
            </div>


            {/* <div className='text-div mt-3'>Escape</div> */}
            <div className='text-div'>
                <span>Gérer vos évènements !</span>
            </div>

        </div>
    )
}

export default Calendar
