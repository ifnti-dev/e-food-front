
import '../../css/index.css';
import { lazy, Suspense,  useRef, useState } from "react";
import CommandsInProcessing from '../commands_from_status/CommandsInProcessing';
import CommandsInProgress from '../commands_from_status/CommandsInProgress';
import CommandsInDelivery from '../commands_from_status/CommandsInDelivery'
import Spinner from '../../../events/components/Spinner';
const Details = lazy(() => import('../details_command/Details'))

import { AnimatePresence } from 'framer-motion';
import { CommandContext } from '../../context/ComandContext';
import { useFetchCommandsByStatus } from '../../hooks/useFetchCommandsByStatus';

import useUpdateCommandStatus from '../../hooks/useUpdateCommandStatus';
import { useFetchMenusCommande } from '../../hooks/useFetchMenusCommande';
import AllCommands from '../allOrder/Commande';



export default function MainCommand() {
    const [show, setShow] = useState(false);
 
    const [dragging, setDragging] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('EN_COURS');
    const [id, setId] = useState("");

    const [idCmd,setIdCommande] = useState("");

    const traitementRef = useRef<HTMLOListElement>(null);
    const livraisonRef = useRef<HTMLOListElement>(null);



    useUpdateCommandStatus({ id: id, status: status});


    const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {

        setDragging(true);
        if (e.currentTarget) {
            e.dataTransfer.setData('text/plain', e.currentTarget.id);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {

        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLLIElement>, newStatus: string) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedItemId = e.dataTransfer.getData('text/plain');
        const droppedItem = document.getElementById(droppedItemId);
        console.log(droppedItem);
        


        if (e.currentTarget && droppedItem) {


            e.currentTarget.appendChild(droppedItem);
        }
        setStatus(newStatus);
        setId(droppedItemId);
        setDragging(false);
    };

    const togleShow = (id: string) => {
        
        
        
        setShow(true);

        setIdCommande(id);
                
    }

    const {menus,skeleton,livraisonInfoRef} = useFetchMenusCommande(idCmd);


    const togleHide = () => {


        setShow(false);
    }

    const fetchEnCours = () => {

        const { cachedData } = useFetchCommandsByStatus({ status: "EN_COURS", page: 0, size: 10,id:"2" });

        return cachedData;

    }

    const fetchEnTraitement = () => {

        const { cachedDataEnTratement } = useFetchCommandsByStatus({ status: "EN_TRAITEMENT", page: 0, size: 10,id:"2" });


        return cachedDataEnTratement;

    }

    const fetchEnLivraison = () => {

        const { cachedDataEnLiv } = useFetchCommandsByStatus({ status: "EN_LIVRAISON", page: 0, size: 10,id:"2" });
    
        

        return cachedDataEnLiv;

    }

   
/* -------------------------------- CONSTANTS -------------------------------- */
    const EN_COURS_COMMANDS = fetchEnCours();
    const EN_TRAITEMENT_COMMANDS = fetchEnTraitement();
    const EN_LIV_COMMANDS = fetchEnLivraison();

    
    return (

        <CommandContext.Consumer>

            {value => <div className=" d-flex py-lg-3 py-md-2"  >
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="border-0 mb-4">
                            <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 className="fw-bold mb-0 py-3 pb-2">Commandes</h3>
                                <div className="col-auto py-2 w-sm-100">
                                    <ul className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#Invoice-list" role="tab" aria-selected="false">Commande du jours</a></li>
                                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Invoice-Simple" role="tab" aria-selected="false">Commandes d'hier</a></li>
                                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Invoice-Email" role="tab" aria-selected="false">Toutes les commandes</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="tab-content position-relative">
                        <div className="tab-pane fade show active row taskboard g-3 py-xxl-4 d-flex" id="Invoice-list">

                            <CommandsInProgress handleDragStart={handleDragStart} togle={togleShow} data={EN_COURS_COMMANDS}  status={"EN_COURS"}/>

                            <CommandsInProcessing refTraitement={traitementRef} togle={togleShow} handleDragStart={handleDragStart} onDragOver={handleDragOver} status={"EN_TRAITEMENT"} onDrop={(e: any) => handleDrop(e, 'EN_TRAITEMENT')} data={EN_TRAITEMENT_COMMANDS} />


                            <CommandsInDelivery refDelivery={livraisonRef} togle={togleShow} onDragOver={handleDragOver} onDrop={(e: any) => handleDrop(e, 'EN_LIVRAISON')} data={EN_LIV_COMMANDS} status={"EN_LIVRAISON"}  />


                        </div>

                        <div className="tab-pane fade" id="Invoice-Simple">
                            
                        </div>
                        <div className="tab-pane fade position-absolute top-0 w-100" id="Invoice-Email">
                        <AllCommands/>
                        </div>
                    </div>

                </div>

                <Suspense fallback={<Spinner value={true} />}>
                    <AnimatePresence>
                        {show && <Details togle={togleHide}  menus={menus} skeleton={skeleton} livraison={livraisonInfoRef} />}
                    </AnimatePresence>
                </Suspense>

            </div>}

        </CommandContext.Consumer>
    )
}