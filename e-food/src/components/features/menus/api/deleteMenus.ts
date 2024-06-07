import instance from "../utils/axios";

const getRestaurantMenusUrl: string = "menus";

//
const deleteMenu = async (menuId: number) => {
  return await instance
    .delete(`${getRestaurantMenusUrl}/${menuId}/delete`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw Error(error.message);
    });
};

export default deleteMenu;
