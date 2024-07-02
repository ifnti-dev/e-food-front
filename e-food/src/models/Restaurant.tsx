export default interface Restaurant {
  code: number;
  nom: string;
  ville: string;
  adresse: string;
  telephone: string;
  heure_ouverture: string;
  heure_fermeture: string;
  jour_ouverture: string;
  etat: string;
  coordonnee_gps_x: number;
  coordonnee_gps_y: number;
}