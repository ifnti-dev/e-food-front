// import FullCalendar from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {  } from "@fullcalendar/interaction" // needed for dayClick
import "../../../../App.css";



import Spinner from './Spinner';

import UpdateForm from './UpdateForm';
import { DeleteAlert } from '../../../sweetalerts/DeleteAlert';
import { usePostEvent } from '../hooks/usePostEvent';
import { useFetchEvent } from '../hooks/useFetchEvent';
import { useUpdateFromDates } from '../hooks/useUpdateFromdates';
import { useUpdateFromTitleAndDes } from '../hooks/useUpdateFromTitleAndDes';
import timeGridPlugin from '@fullcalendar/timegrid';


const Calendar = () => {


    //Fetch event handler hook
    const { loading, events } = useFetchEvent()

    console.log(events);
    

    //post event handler
    const { onSubmit, toggleModal, modal, handleSelect, onChange, registerPost, errorsPosts } = usePostEvent()

    //update dates from drapstop event
    const { eventDragStop } = useUpdateFromDates();
    //Update from title and description 
    const { event, handleUpdateEvent, OnChangeUpdate, updateFormModal, show, updateSubmit, register, deleteEvent, setDeleteModal, deleteModal, errors } = useUpdateFromTitleAndDes();


    return (
        // <EventListProvider>
            <div className='position-relative'>

                <UpdateForm props={{
                    title: event.title,
                    description: event.description,

                }}
                    show={show}
                    toggleModalUp={updateFormModal}
                    onSubmit={updateSubmit}
                    onChange={OnChangeUpdate}
                    removeEventById={deleteEvent}
                    errors={errors}
                    register={register}
                />

                {/* <!-- Modal Members--> */}

                {/* <Success isVisible={visible} visible={setVisible} props={successProps} /> */}

                <DeleteAlert visible={deleteModal} setVisible={setDeleteModal} />

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
                                            <input type="text" className="form-control" {...registerPost('title', { required: true })} placeholder="Le titre" name='title' onChange={onChange} value={events.title} />

                                        </div>
                                        {errorsPosts.title && errorsPosts.title.type === "required" && <span className=" mb-3 text-danger">Ce champ  est obligatoire</span>}

                                    </div>

                                    <div className="inviteby_description">
                                        <div className="input-group mb-3">
                                            <textarea className='form-control' {...registerPost('description', { required: true })} name="description" placeholder='Une description...' onChange={onChange} value={events.description}></textarea>

                                        </div>
                                        {errorsPosts.description && errorsPosts.description.type === "required" && <span className=" mb-3 text-danger">Ce champ  est obligatoire</span>}

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
        // </EventListProvider>
    )
}

export default Calendar
