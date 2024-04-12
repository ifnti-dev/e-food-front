function ActionComponent  (){
    return(
            <div className="dropdown">
            <i className="bi bi-three-dots-vertical" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#"><i className="bi bi-eye text-secondary"></i> Détail</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-trash3-fill text-danger"></i> Supprimer</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-pencil text-primary"></i> Modifier</a></li>
            </ul>
          </div>
          )
}

  export default ActionComponent;