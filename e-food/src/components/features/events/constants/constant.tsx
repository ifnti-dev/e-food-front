import { SwalSuccess } from "../types/interfaces";


export const successProps: SwalSuccess = {
  title: "Valide !",
  text: "Opération réussie !"
}


export const language = {
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


export const columns = [
  {
    data: "title",
    title: "Titres",
    render: (data: string) => {
      
      return `<h2 class ="mb-0 fw-bold  fs-6  mb-2" style="color:#484c7f">${data}<h2/>`
    }
  },
  {
    data: "description",
    title: "descriptions",
    render:(data:string)=>{

        return `<span class="small text-muted  fw-bold">${data}</>`
    }

  },
  {
    data: "start",
    title: "Date de début",
    render: (data: string) => {
      let date = new Date(data);
      return  `<span class="small light-success-bg  p-1 rounded"> ${date.toUTCString()}</span>`        ;
    }
  },
  {
    data: "end",
    title: "Date de fin",
    render: (data: string) => {
      let date = new Date(data);
      return        `<span class="small light-info-bg  p-1 rounded"> ${date.toUTCString()}</span>`        ;

    }
  },
  {
    data: "status",
    title: "Status",
    render: (data: boolean, ) => {

      if (data == false) {


        return `<span class="badge bg-success">En cours</span>`;


      }


      return data;
    }
  },
  {
    data: "progress",
    title: "Progression",
    render:(data:{cusumme:number,total:number})=>{
      console.log(data);
      return '<progress value="' + data.cusumme + '" max="'+data.total+'"></progress>'
    }
  },
  // {
  //   data: null,
  //   title: "Actions",
  //   render:() => (
  //     // <ActionComponent/>
  //   ),
  // },
  // suite
];

export const columnDefs = [
  { targets: "_all", className: 'dt-left' }
];


export const lengthMenu = [10, 25, 50, 100, 150, 200, 300, 500];



export const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};