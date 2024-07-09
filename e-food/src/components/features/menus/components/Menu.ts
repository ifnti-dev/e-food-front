export interface Menu {
    id: number;
    name: string;
    status: string;
    preparationTime: string;
    elements: string[];
    images: string[];
    price: number; // Ajout du champ price
  }