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
    actions: "5421",
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "System Architect",
    adress: "$320,800",
    contact: "2011/04/25",
    status: "Edinburgh",
    actions: "5421",
  },
];

const columns = [
  { data: "user", title: "Users" },
  { data: "role", title: "Roles" },
  { data: "adress", title: "Adresse" },
  { data: "contact", title: "Contacts" },
  { data: "status", title: "Status" },
  { data: "contact", title: "Actions" },
];

const UserTable = () => {
  return <ReactDataTable data={data} columns={columns} />;
};

export default UserTable;