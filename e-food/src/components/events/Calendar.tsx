// import FullCalendar from '@fullcalendar/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { DateSelectArg } from '@fullcalendar/core/index.js'
import "../../App.css";
import { useState } from 'react';
const Calendar = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    const handleDateClick = (arg: {
        dateStr: string;
        title: string;
    }) => {
        toggleModal();
    }

    const handleSelect = (arg: DateSelectArg) => {
        console.log(arg.startStr)
    }
    return (
        <>

            {/* <!-- Modal Members--> */}

            {modal && <div className="modal overlay fade show d-block" id="addUser" tabIndex={-1} aria-labelledby="addUserLabel" aria-hidden="true" role='dialog' >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  fw-bold" id="addUserLabel">Employee Invitation</h5>
                            <button type="button" className="btn-close" onClick={toggleModal}></button>
                        </div>
                        <div className="modal-body">
                            <div className="inviteby_email">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" />
                                    <button className="btn btn-dark" type="button" id="button-addon2">Sent</button>
                                </div>
                            </div>

                        </div>
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
                    footerToolbar={true}
                    headerToolbar={{
                        left: 'prev,next',
                        center: 'title',
                        right: 'dayGridWeek,dayGridDay' // user can switch between the two
                    }}
                    select={handleSelect}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridWeek"
                    dateClick={handleDateClick}
                    selectable={true}
                    weekends={true}
                    events={[
                        { title: 'event 1', date: '2024-05-21' },
                        { title: 'event 2', date: '2024-04-02' }
                    ]}
                    eventColor='white'

                    eventBackgroundColor='#378006'
                    progressiveEventRendering={true}
                />
            </div>

        </>
    )
}

export default Calendar
