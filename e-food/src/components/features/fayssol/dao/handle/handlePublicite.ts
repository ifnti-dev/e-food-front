import { postPublicite, deletePublicite } from "../api/apiPublicite";
// récupération des entrées utilisateur
const handleOnChange = (e: any, setFormData:any) => {
    const { value, name } = e.target
    setFormData((preve:any) => {
        return {
            ...preve,
            [name]: value
        }
    })
}

// fonction de soumission
const handleSubmit = async (e: any, body:any, loder:any) => {

    e.preventDefault()
    const data = postPublicite(body);
    console.log(data);
    if (data.status == 201) {
        alert('Pub created!');
        loder()
        //   alert(data.data.message)
    }
    //   console.log(data);
}

const handleDelete = (id: number) => {
    // alert("sup en cours");
    deletePublicite(id);
}

const handleEditOnChange = async (e: any, setFormDataEdit: any) => {
    const { value, name } = e.target
    setFormDataEdit((preve:any) => {
        return {
            ...preve,
            [name]: value
        }
    })
}

const handleEdit = (el: { restaurantId: 1, titre: "", description: "", imagesIds: [] }, setFormDataEdit: any) => {
    setFormDataEdit(el)

}

export {
    handleOnChange,
    handleSubmit,
    handleDelete,
    handleEditOnChange,
    handleEdit
}  