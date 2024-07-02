import { MenuInterface } from "../../types/interfaces";
import { Example } from "./Page";

export default function MenusList({menus}:{menus:MenuInterface[]}){

    return (
        <>
        {menus.map(menu => <Example/>)}
        </>
    )
}