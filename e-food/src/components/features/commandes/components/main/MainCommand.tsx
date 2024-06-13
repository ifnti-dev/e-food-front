import React from 'react';
import '../css/index.css';
import { useRef, useState } from "react";
import CommandsInProcessing from '../CommandsInProcessing';


const [dragging, setDragging] = useState<boolean>(false);
const [status, setStatus] = useState<string>('en cours');
const [cards, setCards] = useState<number[]>(Array.from(Array(10).keys()));

const enCoursRef = useRef<HTMLOListElement>(null);
const traitementRef = useRef<HTMLOListElement>(null);
const livraisonRef = useRef<HTMLDivElement>(null);
const livreRef = useRef<HTMLDivElement>(null);

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
        console.log(droppedItem.id);

        e.currentTarget.appendChild(droppedItem);
    }
    setStatus(newStatus);
    setDragging(false);
};

export default function MainCommand() {


    return (
        <>
            <div className="body d-flex py-lg-3 py-md-2">
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


                    <div className="tab-content">
                        <div className="tab-pane fade show active row taskboard g-3 py-xxl-4 d-flex" id="Invoice-list">

                            <CommandsInProcessing refTraitement={traitementRef} onDragOver={handleDragOver} onDrop={(e: any) => handleDrop(e, 'traitement')} />


                        </div>

                        <div className="tab-pane fade" id="Invoice-Simple">

                        </div>
                        <div className="tab-pane fade" id="Invoice-Email">

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}