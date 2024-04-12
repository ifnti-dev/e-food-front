import "datatables.net-dt/css/dataTables.dataTables.css";
import ReactDataTable from "./ReactDatatable";

const data = [
  {
    id: "1",
    user: "Tiger Nixon",
    role: "System Architect",
    adress: "$320,800",
    contact: "2011/04/25",
    status: "Edinburgh",
    action: "5421",
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "System Architect",
    adress: "$320,800",
    contact: "2011/04/25",
    status: "Edinburgh",
    action: "5421",
  },
];

const columns = [
  { data: "user", title: "Users" },
  { data: "role", title: "Roles" },
  { data: "adress", title: "Adresse" },
  { data: "contact", title: "Contacts" },
  { data: "status", title: "Status" },
  { data: "action", title: "Actions" },
];

const UserTable = () => {
  return(
    <>
        <div className="card mb-3">
            <div className="card-header py-3  bg-transparent border-bottom-0 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold">Liste Users</h6>
                <button type="button" className="btn btn-primary"><i className="bi bi-plus-lg"></i>Ajouter</button>
            </div>
            <div className="card-body">
           
            <ReactDataTable data={data} columns={columns} />
            </div>
        </div>
    </>
  ) 
 
};

export default UserTable;