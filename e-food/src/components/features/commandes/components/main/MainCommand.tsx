
import '../../css/index.css';
import { lazy, Suspense, useRef, useState } from "react";
import CommandsInProcessing from '../commands_from_status/CommandsInProcessing';
import CommandsInProgress from '../commands_from_status/CommandsInProgress';
import CommandsInDelivery from '../commands_from_status/CommandsInDelivery'
import Spinner from '../../../events/components/Spinner';
const Details = lazy(() => import('../details_command/Details'))

import { AnimatePresence } from 'framer-motion';
import { ComandListProvider, CommandContext } from '../../context/ComandContext';
import { useFetchCommandsByStatus } from '../../hooks/useFetchCommandsByStatus';
import { PropsCommandType } from '../../types/interfaces';


// const Details = lazy(() => delayForDemo(import('../details_command/Details')))


// function delayForDemo(promise: any) {
//     return new Promise(resolve => {
//         setTimeout(resolve, 2000);
//     }).then(() => promise);
// }

export default function MainCommand() {
    const [show, setShow] = useState(false);
    // const [showCommand,setShowCommand] = useState(true);

    // const { parent } = useAnimate();

    const [dragging, setDragging] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('en cours');
    // const [cards, setCards] = useState<number[]>(Array.from(Array(10).keys()));

    // const enCoursRef = useRef<HTMLOListElement>(null);
    const traitementRef = useRef<HTMLOListElement>(null);
    const livraisonRef = useRef<HTMLOListElement>(null);
    // const livreRef = useRef<HTMLDivElement>(null);

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
        if (e.currentTarget && droppedItem) {
        

            e.currentTarget.appendChild(droppedItem);
        }
        setStatus(newStatus);
        setDragging(false);
    };


  


    const togleShow = ()=>{
       
        
        setShow(true);
    }

    const togleHide = ()=>{

        
        setShow(false);
    }

    const fetchEnCours = ()=>{

        const {cachedData} = useFetchCommandsByStatus({status:"EN_COURS",page:0,size:10});

        return cachedData;

    }

    const fetchEnTraitement = ()=>{

        const {cachedData} = useFetchCommandsByStatus({status:"EN_TRAITEMENT",page:0,size:10});


        return cachedData;

    }

    const EN_COURS_COMMANDS = fetchEnCours();
    const EN_TRAITEMENT_COMMANDS = fetchEnTraitement();

    // console.log(EN_COURS_COMMANDS);
    console.log(EN_TRAITEMENT_COMMANDS);
    
    
  

        

    return (

        <CommandContext.Consumer>
           
        {value =>  <div className=" d-flex py-lg-3 py-md-2" >
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="border-0 mb-4">
                            <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 className="fw-bold mb-0 py-3 pb-2">Commandes</h3>
                                <div className="col-auto py-2 w-sm-100">
                                    <ul className="nav nav-tabs tab-body-header rounded invoice-set" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#Invoice-list" role="tab" aria-selected="true">Commande du jours</a></li>
                                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Invoice-Simple" role="tab" aria-selected="false">Commandes d'hier</a></li>
                                        <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#Invoice-Email" role="tab" aria-selected="false">Toutes les commandes</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="tab-content ">
                        <div className="tab-pane fade show active row taskboard g-3 py-xxl-4 d-flex" id="Invoice-list">

                            <CommandsInProgress handleDragStart={handleDragStart} togle={togleShow} data={EN_COURS_COMMANDS}/>

                            <CommandsInProcessing refTraitement={traitementRef} togle={togleShow} handleDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={(e: any) => handleDrop(e, 'traitement')} data={EN_TRAITEMENT_COMMANDS} />

                            <CommandsInDelivery refDelivery={livraisonRef} onDragOver={handleDragOver} onDrop={(e: any) => handleDrop(e, 'livraison')} />


                        </div>

                        <div className="tab-pane fade" id="Invoice-Simple">

                        </div>
                        <div className="tab-pane fade" id="Invoice-Email">

                        </div>
                    </div>

                </div>


                
                <Suspense fallback={<Spinner value={true} />}>
    
                    <AnimatePresence>
                        <Details togle={togleHide} show={show} />
                        </AnimatePresence>
                </Suspense>



            </div>}
        
        </CommandContext.Consumer>
    )
}