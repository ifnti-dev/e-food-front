
import instance from "../utils/axios";
import Menu from "../types/interfaces";

const getRestaurantMenusUrl: string = "menus/restaurant/";

//
const getRestaurantMenus = async (restaurantId: number): Promise<Menu[]> => {
 return  await instance
    .get<Promise<Menu[]>>(`${getRestaurantMenusUrl}/${restaurantId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw Error(error.message);
    });
};

export default getRestaurantMenus;
