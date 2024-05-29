import { Link } from "react-router-dom";
import ReactDataTable from "../../../pages/ReactDatatable";
import DateFilterForm from "../../../partials/DateFilterForm";
import { columnDefs, columns,  language, lengthMenu } from '../constants/constant';
import { useFetchEvent } from "../hooks/useFetchEvent";
import Spinner from "./Spinner";

function EventTable() {


    const { loading, events } = useFetchEvent()
    
console.log(events);

    return(
        <>
        <div className="card mb-3">

        <Spinner value={loading} />

            <div className="card-header py-3  bg-transparent border-bottom-0 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold">Liste des évènements</h6>

                <Link  to="/manage/events"> <button type="button" className="btn btn-primary"><i className="bi bi-plus-lg"></i>Ajouter</button></Link>
            </div>
            <div className="card-body">
           <DateFilterForm/>
            <ReactDataTable 
                data={events} 
                columns={columns} 
                columnDefs={columnDefs} 
                language={language} 
                processing={true}
                lengthMenu={lengthMenu}
                
                // customStyles={customStyles}
            />
            </div>
        </div>
    </>
    )
}

export default EventTable