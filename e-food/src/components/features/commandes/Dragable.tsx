import React, { useState, useRef } from 'react';


const DragAndDrop: React.FC = () => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [status, setStatus] = useState<string>('en cours');
  const [cards, setCards] = useState<number[]>(Array.from(Array(10).keys()));

  const enCoursRef = useRef<HTMLDivElement>(null);
  const traitementRef = useRef<HTMLDivElement>(null);
  const livraisonRef = useRef<HTMLDivElement>(null);
  const livreRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(true);
    if (e.currentTarget) {
      e.dataTransfer.setData('text/plain', e.currentTarget.id);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, newStatus: string) => {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData('text/plain');
    const droppedItem = document.getElementById(droppedItemId);
    if (e.currentTarget && droppedItem) {
        console.log(droppedItem.id);
        
      e.currentTarget.appendChild(droppedItem);
    }
    setStatus(newStatus);
    setDragging(false);
  };

  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div
            key={index}
            id={`card-${index}`}
            draggable
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()}
            className="col-md-3 mb-3"
            style={{ backgroundColor: dragging && status === 'en cours' ? 'lightblue' : 'transparent' }}
          >
            <div className="card p-3">Card {card + 1}</div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-3">
          <div
            ref={enCoursRef}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'en cours')}
            className="border p-3"
          >
            En cours
          </div>
        </div>
        <div className="col-md-3">
          <div
            ref={traitementRef}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'traitement')}
            className="border p-3"
          >
            Traitement
          </div>
        </div>
        <div className="col-md-3">
          <div
            ref={livraisonRef}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'livraison')}
            className="border p-3"
          >
            Livraison
          </div>
        </div>
        <div className="col-md-3">
          <div
            ref={livreRef}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, 'livré')}
            className="border p-3"
          >
            Livré
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
