import { useEffect } from "react";
import swal from "sweetalert";
import { SwalDeletType } from "../features/events/types/interfaces";

export function DeleteAlert({ visible,setVisible,props }: { visible: boolean,setVisible:React.Dispatch<React.SetStateAction<boolean>> ,props:SwalDeletType}) {

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
                        setVisible(!visible)
                    } else {
                        swal(props.text_delete);
                        setVisible(!visible)
                    }
                });
        }

        if (visible) {
            DeleteAlert()
        }
       
    }, [visible])


    return <></>

}