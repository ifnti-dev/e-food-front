import {  SwalSuccess } from "../types/interfaces";


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
    { data: "title", title: "Titres" },
    { data: "description", title: "descriptions" },
    { data: "start", title: "Date de début" },
    { data: "end", title: "Date de fin" },
    // { data: "status", title: "Status" },
    // {
    //   data: null,
    //   title: "Actions",
    //   render:() => (
    //     // <ActionComponent/>
    //   ),
    // },
    // suite
  ];

  export const  columnDefs = [
    { targets: "_all", className: 'dt-left' }
  ];


  export const lengthMenu = [10, 25, 50, 100, 150, 200, 300, 500];

// const deleteProps: SwalDeletType = {
//     title: "Action non reversible !",
//     text: "Changement des dates de l'evénement",
//     text_delete: "Changement non efféctué",
//     text_success: "Opération réussie !"
// }


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