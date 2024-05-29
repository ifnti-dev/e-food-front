import { SwalDeletType, SwalSuccess } from "../types/interfaces";


export const successProps: SwalSuccess = {
    title: "Valide !",
    text: "Opération réussie !"
}


const deleteProps: SwalDeletType = {
    title: "Action non reversible !",
    text: "Changement des dates de l'evénement",
    text_delete: "Changement non efféctué",
    text_success: "Opération réussie !"
}