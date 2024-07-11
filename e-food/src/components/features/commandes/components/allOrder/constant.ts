



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
    data: "nom",
    title: "Nom",
    render: (data: string) => {
      
      return `<h3 class ="mb-0 fw-bold  fs-6  mb-2" style="color:#484c7f">${data}<h3/>`
    }
  },
  {
    data: "prenom",
    title: "Prénom",
    render:(data:string)=>{

        return `<span class="small text-muted  fw-bold">${data}</>`
    }

  },
  {
    data: "montant",
    title: "Montant",
    render: (data: string) => {
      
      return  `<span class="small text-black   p-1 rounded"> ${data}</span>`        ;
    }
  },
  {
    data: "date",
    title: "Date de la commande",
    render: (data: string) => {
      let date = new Date(data);
      return        `<span class="small  p-1 rounded"> ${date.toUTCString()}</span>`        ;

    }
  },
  
  {
    data: "status",
    title: "Etat",
    render: (data: string, ) => {

      if (data == "EN_COURS") {


        return `<span class="badge bg-info-light text-black">En cours</span>`;


      }

      if (data == "EN_TRAITEMENT") {


        return `<span class="badge bg-warning text-black">En Traitement</span>`;


      }


      if (data == "EN_LIVRAISON") {


        return `<span class="badge  bg-secondary text-black">En Livraison</span>`;


      }


      if (data == "LIVRER") {


        return `<span class="badge bg-success text-black">Livrée</span>`;


      }

      if (data == "REJETER") {


        return `<span class="badge bg-danger text-black">Rejetée</span>`;


      }
      return data;
    }
  },
//   {
//     data: "progress",
//     title: "Progression",
//     render:(data:{cusumme:number,total:number})=>{
      
//       return '<progress value="' + data.cusumme + '" max="'+data.total+'"></progress>'
//     }
//   },
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


export const lengthMenu = [5,10, 25, 50];



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