import MenuCard from "../../features/menus/components/MenuCard";
import { useEffect, useState } from "react";
import Menu from "../../features/menus/types/interfaces";
import instance from "../../features/menus/utils/axios";

// const menus = [
//   {
//     id: 52,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Disponible",
//     restaurant_id: 1,
//   },
//   {
//     id: 53,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Disponible",
//     restaurant_id: 1,
//   },
//   {
//     id: 54,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Disponible",
//     restaurant_id: 1,
//   },
//   {
//     id: 55,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Disponible",
//     restaurant_id: 1,
//   },
//   {
//     id: 56,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Indisponible",
//     restaurant_id: 1,
//   },
//   {
//     id: 57,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Disponible",
//     restaurant_id: 1,
//   },
//   {
//     id: 58,
//     name: "Pizza",
//     prix: 3000,
//     temps_preparation: "2h",
//     statut: "Indisponible",
//     restaurant_id: 1,
//   },
// ];

const Menus = () => {
  const [menus, setMenus] = useState<Menu[] | null>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await instance.get<Menu[]>("menus/restaurant/1");
      if (response.status != 200) {
        throw new Error(`${response.status}`);
      } else {
        return response.data;
      }
    };
    fetchMenus().then((response) => {
      if ("menus" in response) {
        setMenus(response.menus);
      }
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center my-5">Carte des menus</h1>
      </div>
      <div className="row mx-0 px-0 justify-content-evenly">
        {menus &&
          menus.map((menu, index) => <MenuCard key={index} {...menu} />)}
      </div>
    </>
  );
};

export default Menus;
