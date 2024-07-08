
interface PropsCommandType {
    montant: number,
    id: string,
    date:number,
    nom:string,
    prenom:string

}

// type Client = {
//     nom:string,
//     prenom:string
// } 


interface ParamCommandStatusType{
    status:string,
    page:number|null,
    size:number|null
}

interface UpdateStatusType{
    id:string,
    status:string,
}

interface MenuInterface{
    id:string,
    temps_preparation:string,
    prix:number,
    nom:string|null
}


interface LivraisonPropsType{
    coordonnee_x:number,
    coordonnee_y:number,
    description:string
}


export type {PropsCommandType,ParamCommandStatusType,UpdateStatusType,MenuInterface,LivraisonPropsType}