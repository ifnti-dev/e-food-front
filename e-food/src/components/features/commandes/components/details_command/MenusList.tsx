import { MenuInterface } from "../../types/interfaces";
import { Menu } from "./Menu";

export default function MenusList({menus}:{menus:MenuInterface[]}){

    console.log(menus);
    

    return (
        <>
        {menus.map(menu => <Menu menu={menu}/>)}
        </>
    )
}