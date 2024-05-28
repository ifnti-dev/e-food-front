import { useEffect } from "react";
import swal from "sweetalert";
import { SwalDeletType } from "../features/events/types/interfaces";

export function DeleteAlert({ visible,setVisible,props}: { visible: number,setVisible:React.Dispatch<React.SetStateAction<number>> ,props:SwalDeletType}) {

    useEffect(() => {

        const DeleteAlert = async ()=>{
            swal({
                title: props.title,
                text: props.text,
                icon: "warning",
                buttons: [true,"ok"],
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal(props.text_success, {
                            icon: "success",
                        });
                        setVisible(2)
                    } else {
                        swal(props.text_delete);
                        setVisible(3)
                    }
                });
        }

        if (visible == 1) {
            DeleteAlert()
        }
       
    }, [visible])


    return <></>

}