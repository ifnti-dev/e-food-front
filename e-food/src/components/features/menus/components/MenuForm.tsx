import "../../../../App.css";
import ComposanteForm from "../composantes/ComposanteForm";

const MenuForm = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="bg-white col-lg-8 rounded-3 menu-form-card px-3">
          <h3 className="text-center py-5 roboto">Créez un nouveau menu</h3>
          <form>
            <div className="form-group mb-3">
              <span className="menu-form-label roboto">Nom du menu :</span>
              <input type="text" className="menu-form-input roboto" />
            </div>
            <div className="form-group mb-3">
              <span className="menu-form-label roboto">Prix du menu :</span>
              <input type="number" className="menu-form-input roboto" />
            </div>
            <div className="form-group mb-3">
              <span className="menu-form-label roboto">
                Temps de préparation :
              </span>
              <input type="time" className="menu-form-input roboto" />
            </div>
            <div className="form-group mb-3">
              <span className="menu-form-label roboto">Statut</span>
              <select name="statut" id="" className="menu-form-input bg-white">
                <option value="Disponible">Disponible</option>
                <option value="Indisponible">Indisponible</option>
              </select>
            </div>
            <div>image</div>
          </form>
        </div>

        <ComposanteForm />

        <h4 className="text-center mt-5">Ajouter une composante</h4>

        <div className="row mx-0 px-0 my-2">
          <button className="composante-modal">+</button>
        </div>

      </div>
    </>
  );
};

export default MenuForm;
