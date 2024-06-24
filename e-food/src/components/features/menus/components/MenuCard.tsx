import "../../../../App.css";
import Logo from "../../../../assets/images.jpeg";
import deleteMenu from "../api/deleteMenus";

type MenuProps = {
  id: number;
  nom: string;
  prix: number;
  temps_preparation: string;
  statut: string;
  restaurant_id: number;
};

const MenuCard = (props: MenuProps) => {
  const handleDelete = (menuId: number) => {
    const confirmDelete = confirm("Supprimer le menu ?");
    if (confirmDelete) {
      deleteMenu(menuId);
      location.reload();
    }
  };

  return (
    <>
      <div className="bg-white col-md-3 col-lg-2 mx-2 my-3 rounded-3 menu-card py-2">
        <button
          className="close"
          onClick={() => {
            handleDelete(props.id);
          }}
        >
          <i className="bi bi-trash-fill"></i>
        </button>

        <button className="update">
          <i className="bi bi-pencil-square"></i>
        </button>

        <h4 className="text-center fw-bold">{props.nom}</h4>
        <hr className="my-0" />
        <div className="d-flex justify-content-center align-items-center p-2">
          <div className="image-border">
            <img src={Logo} alt="" className="menu-card-img" />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center py-1">
          <span className="menu-card-prix">{props.prix} FCFA</span>
        </div>
        <div className="d-flex justify-content-between align-items-center my-2">
          <span className="menu-card-time">
            <i className="bi bi-hourglass-split"></i> {props.temps_preparation}
          </span>
          <span className="menu-card-statut">{props.statut}</span>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
