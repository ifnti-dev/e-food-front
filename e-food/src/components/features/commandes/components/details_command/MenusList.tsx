import { MenuInterface } from "../../types/interfaces";
import { Menu } from "./Menu";

export default function MenusList({menus}:{menus:MenuInterface[]}){

    return (
        <>
        {menus.map(menu => <Menu menu={menu} key={menu.id} />)}
        </>
    )
}