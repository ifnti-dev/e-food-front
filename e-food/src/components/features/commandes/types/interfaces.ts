
interface PropsCommandType {
    montant: number,
    id: string,
    client:Client,

}

type Client = {
    nom:string,
    prenom:string
} 


interface ParamCommandStatusType{
    status:string,
    page:number|null,
    size:number|null
}

interface UpdateStatusType{
    id:string,
    status:string,
    idClient:number
}


export type {PropsCommandType,ParamCommandStatusType,UpdateStatusType}