import "datatables.net-dt/css/dataTables.dataTables.css";
import ReactDataTable from "./ReactDatatable";
import DateFilterForm from "../partials/DateFilterForm";
import ActionComponent from "../partials/ActionComponent";


const data = [
  {
    id: "1",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "1",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "1",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "1",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "1",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "1",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
  },
  {
    id: "2",
    user: "Tiger Nixon",
    role: "Gerant",
    adress: "Lomé",
    contact: "2011 04 25",
    status: "Active",
    action: <ActionComponent/>,
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
const  columnDefs = [
  { targets: "_all", className: 'dt-right' }
];

const language = {
  processing: "Traitement en cours...",
  search: "Rechercher&nbsp;:",
  lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
  info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
  infoEmpty: "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
  infoFiltered: "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
  infoPostFix: "",
  loadingRecords: "Chargement en cours...",
  zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
  emptyTable: "Aucune donnée disponible dans le tableau",
  paginate: {
      first: "Premier",
      previous: "Pr&eacute;c&eacute;dent",
      next: "Suivant",
      last: "Dernier"
  },
  aria: {
      sortAscending: ": activer pour trier la colonne par ordre croissant",
      sortDescending: ": activer pour trier la colonne par ordre décroissant"
  }
};

const lengthMenu = [10, 25, 50, 100, 150, 200, 300, 500];



const UserTable = () => {
  return(
    <>
        <div className="card mb-3">
            <div className="card-header py-3  bg-transparent border-bottom-0 d-flex justify-content-between">
                <h6 className="mb-0 fw-bold">Liste Users</h6>
                <button type="button" className="btn btn-primary"><i className="bi bi-plus-lg"></i>Ajouter</button>
            </div>
            <div className="card-body">
           <DateFilterForm/>
            <ReactDataTable 
                data={data} 
                columns={columns} 
                columnDefs={columnDefs} 
                language={language} 
                processing={true}
                lengthMenu={lengthMenu}
            />
            </div>
        </div>
    </>
  ) 
 
};

export default UserTable;