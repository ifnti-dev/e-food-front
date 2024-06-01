interface Publicite  {
    id:number,
    titre:string,
    description:string,
    images:Number[],
    // etat:string
}

interface PubliciteItemProps {
    publicite: Publicite;
  }
  
interface PubliciteListProps {
    publicites: Publicite[];
  }

  interface PubToSend {
    titre:string,
    description:string,
  }
  

export type {PubliciteItemProps, PubliciteListProps,PubToSend, Publicite}