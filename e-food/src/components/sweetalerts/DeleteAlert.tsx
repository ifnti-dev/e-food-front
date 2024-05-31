import { useEffect } from "react";
import swal from "sweetalert";
import { SwalDeletType } from "../features/events/types/interfaces";

export function DeleteAlert({ visible,setVisible,props,handleDelete}: { visible: boolean,setVisible:React.Dispatch<React.SetStateAction<boolean>> ,props:SwalDeletType,handleDelete:any}) {

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

                        handleDelete()
                        
                        setVisible(false)
                    } else {
                        swal(props.text_delete);
                        setVisible(false)
                    }
                });
        }

        if (visible == true) {
            DeleteAlert()
        }
       
    }, [visible])


    return <></>

}