const ComposanteForm = () => {
    return (
      <>
        <div className="bg-white col-lg-5 rounded-3 menu-form-card px-3 my-5">
          <h3 className="text-center py-4">Nouvelle composante</h3>
          <form action="">
            <div className="form-group mb-3">
              <span className="menu-form-label roboto">Nom de la composante :</span>
              <input type="text" className="menu-form-input roboto" />
            </div>
            <div className="form-group mb-3">
              <span className="menu-form-label roboto">Prix de la composante :</span>
              <input type="number" className="menu-form-input roboto" />
            </div>
          </form>
        </div>
      </>
    );
};

export default ComposanteForm;
