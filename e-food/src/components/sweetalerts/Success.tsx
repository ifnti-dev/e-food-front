import { useEffect,  } from "react"
import swal from "sweetalert";
import { SwalSuccess } from "../features/events/types/interfaces";

export function Success({ isVisible, visible, props }: { isVisible: boolean, visible: React.Dispatch<React.SetStateAction<boolean>>,props:SwalSuccess }) {



    useEffect(() => {
        const showAlert = async () => {

            let swalInst = swal(props.title, props.text, "success",);


            swalInst.then((response) => {
                if (response) {
                    visible(false)
                }

            })

        }

        if (isVisible) {
            showAlert();
        }
    }, [isVisible])


    return <></>
}