// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ReadMore } from "../partials/ReadMore";
// import Popup from "reactjs-popup";
// // import { error } from "jquery";
// // import MyModal from "../partials/MyModal";

// import Spinner from "../features/events/components/Spinner";


// const un_axios = axios.create({
//     baseURL:"http://localhost:8085/e-food/api/v1/publicites"
// });

// function Publicite() {
//     const [publicites, setPublicites] = useState<any[]>([]);
//     const [formData, setFormData] = useState({restaurantId:1,titre:"",description:"",imagesIds:[]});
//     const [isLoad, setIsLoad] = useState(false);
//     const [formDataEdit, setFormDataEdit] = useState({restaurantId:1,titre:"fgr",description:"15",imagesIds:[]})


// // récupération des entrées utilisateur
// const handleOnChange = (e:any)=>{
//     const {value, name} = e.target
//     setFormData((preve)=>{
//       return{
//         ...preve,
//         [name]:value
//       }
//     })
//   }
//   // fonction de soumission
//     const handleSubmit = async(e:any)=> {
       
//       e.preventDefault()
//       const data = await un_axios.post("",formData)
//       console.log(data);
//       if (data.status == 201) {
//           alert('Pub created!');
//           loadPublicites()
//         //   alert(data.data.message)
//       }
//     //   console.log(data);
//     }

//     function deletePub(id:number) {
//         un_axios
//           .delete(`/${id}`)
//           .then(() => {
//             alert("Pub deleted!");
//             loadPublicites()
//           }).catch(error => console.log(error+"**********")
//           );
//       }

//     const handleDelete = (id:number)=>{
//         // alert("sup en cours");
//         deletePub(id);
//     }
  
//     const handleUpdate = async(id:number)=>{

//     }
    
//     const handleEditOnChange = async(e:any)=>{
//       const {value, name} = e.target
//       setFormDataEdit((preve)=>{
//         return{
//           ...preve,
//           [name]:value
//         }
//       })
//     }
//     const handleEdit = (el:{restaurantId:1,titre:"",description:"",imagesIds:[]})=>{
//       setFormDataEdit(el)
     
//     }


//     useEffect(() => {
//         loadPublicites();
//     }, []);

//     const loadPublicites = () => {
//         // const result = await un_axios.get("");
//         // setPublicites(result.data);
//         un_axios.get("").then(response=>{
//             setIsLoad(true);
//             setPublicites(response.data);
//         }).catch(error => {
//             setIsLoad(false);
//             console.log(error);
            
//         })
//     }

//     // const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//     // const toggleExpand = (index: number) => {
//     //     if (expandedIndex === index) {
//     //         setExpandedIndex(null);
//     //     } else {
//     //         setExpandedIndex(index);
//     //     }
//     // };

//     if (!publicites || publicites.length <= 0){ return(
//         <>
//         <div className="row ">
//             <div className="col-lg-8">
//                <h4>Aucune publicité</h4>
               
//             </div>

//             <div className="col-lg-4 d-none d-lg-block overflow-auto" style={{ maxHeight: "80vh" }}>
//                     <div className="alert alert-secondary shadow-sm">
//                         <h4 className="text-center">Ajouter une publicité</h4>
//                        <Form handleSubmit={handleSubmit } handleOnChange={handleOnChange} rest={formData}/>
//                     </div>
//             </div>
//         </div>   
//         </>
//     )}else if(!isLoad){
//         return(
//             <Spinner value={true} /> 
//         )
        
//     }else{

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-lg-8">
//                     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//                     {publicites.map((publicite, index) => (
//                         <div className="col shadow" key={publicite.id}>
//                             <div className="card rounded-4">
//                                 <div id={`carouselExampleControls-${publicite.id}`} className="carousel slide " data-bs-ride="carousel">
//                                     <div className="carousel-inner">
//                                         <div className="carousel-item active">
//                                             <img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" width={200} height={200} className="d-block w-100 rounded" alt="..."/>
//                                         </div>
//                                         <div className="carousel-item">
//                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf_KjJsN2sKswYMA2yk5dJvqg63XWVecU_w&s" width={200} height={200} className="d-block w-100 rounded" alt="..."/>
//                                         </div>
//                                         <div className="carousel-item">
//                                             <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" width={200} height={200} className="d-block w-100 rounded" alt="..."/>
//                                         </div>
//                                     </div>
//                                     <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleControls-${publicite.id}`} data-bs-slide="prev">
//                                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">Previous</span>
//                                     </button>
//                                     <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleControls-${publicite.id}`} data-bs-slide="next">
//                                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                         <span className="visually-hidden">Next</span>
//                                     </button>
//                                 </div>

//                                     {/*  */}





//                                     {/* <img className="card-img-top" src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg" width={200} height={200} alt="Card image cap" /> */}
//                                     <div className="card-body" style={{ maxHeight: "150px", overflow: "hidden" }}>
//                                         <h5 className="card-title">{publicite.titre}</h5>
//                                         <div className="p-20 flex items-center justify-center w-screen h-screen">
//                                             <div className="w-80">
//                                                 <ReadMore id={"read-more-text"+index.toString()} text={publicite.description} />
//                                             </div>
//                                         </div>
                                        
//                                     </div>
//                                     <div className="card-footer">
                                 
//                                         <div className="accordion" key={index}>
//                                             <div className="accordion-item">
//                                                 <h2 className="accordion-header">
//                                                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#ac" + index.toString()} aria-expanded="false" aria-controls="collapseOne">
//                                                         <i className="bi bi-three-dots"></i>
//                                                     </button>
//                                                 </h2>
//                                                 <div id={"ac" + index.toString()} className="accordion-collapse collapse" data-bs-parent="#accordion">
//                                                     <div className="accordion-body">
//                                                         <div className="d-flex justify-content-between" >
                                                                
//                                                                 {/* <Popup key={"form"+index.toString()} modal trigger={<i className="bi bi-pen text-primary fs-5" aria-hidden="true"  onClick={()=>handleEdit(publicite)}></i>}>
//                                                                     <div className="alert alert-secondary p-4 shadow rounded"  key={publicite.id}>
//                                                                     <h4>Modifier cette publicité</h4>
//                                                                         <Form handleSubmit={handleUpdate } handleOnChange={handleEditOnChange} rest={formDataEdit}/>
//                                                                     </div>
//                                                                 </Popup> */}
                                                                
//                                                                 <MyModal/>

//                                                                 <Popup key={publicite.id} modal nested  position="top left" trigger={<i className="bi bi-trash text-danger fs-5 mx-2" aria-hidden="true"></i>}>
//                                                                     <div className="alert alert-warning p-4 shadow "  key={publicite.id}>
//                                                                     <h4>Êtes-vous sûr ?</h4>
//                                                                     <div className="d-flex justify-content-betwenn p-2">
//                                                                         <button className="btn btn-secondary">Non</button>
//                                                                         <button className="btn btn-danger mx-2" onClick={()=>handleDelete(publicite.id)}>Oui</button>
//                                                                     </div>
                                                                       
//                                                                     </div>
//                                                                 </Popup>
                                                            
//                                                             {/* <i className="bi bi-trash text-danger fs-5 "  onClick={()=>handleDelete(publicite.id)}></i> */}
        
//                                                             <i className="bi bi-three-dots fs-5" aria-hidden="true"></i>
                                                            
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
                                       
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="col-lg-4 d-none d-lg-block overflow-auto" style={{ maxHeight: "80vh" }}>
//                     <div className="alert alert-secondary shadow-sm rounded">
//                         <h4 className="text-center">Ajouter une publicité</h4>
//                        <Form handleSubmit={handleSubmit } handleOnChange={handleOnChange} rest={formData}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

//     }

// }

// export default Publicite;
