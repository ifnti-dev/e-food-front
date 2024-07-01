export default interface Menu {
  id: number;
  nom: string;
  prix: number;
  temps_preparation: string;
  statut: string;
  images: string[];
  restaurant_id: number;
  composants_ids: number[];
  composantes: string;
  createdAt: number;
  updatedAt: number;
}
