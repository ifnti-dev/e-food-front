import { useEffect } from "react";
import swal from "sweetalert";

export function DeleteAlert({ visible,setVisible }: { visible: boolean,setVisible:React.Dispatch<React.SetStateAction<boolean>> }) {

    useEffect(() => {

        const DeleteAlert = async ()=>{
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this imaginary file!",
                icon: "warning",
                buttons: [true,"ok"],
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        setVisible(!visible)
                    } else {
                        swal("Your imaginary file is safe!");
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