import React, { useState } from 'react';
import { Card, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';
import './MenuCard.css'; // Assure-toi d'importer correctement ton fichier de styles

interface MenuCardProps {
  menu: {
    id: number;
    name: string;
    status: string;
    preparationTime: string;
    elements: string[];
    images: string[];
    price: number;
  };
}

const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMouseEnter = () => {
    if (!modalOpen) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!modalOpen) {
      setHovered(false);
    }
  };

  return (
    <div className="menu-card-wrapper">
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='bg-light bg-gradient'
      >
          <div className="price-badge">{menu.price} €</div>
        <Carousel className='bg-primary'>
          {menu.images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-image-wrapper">
                <img
                  className="d-block w-100 rounded-circle"
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={200}
                  height={200}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>
            <strong>Status:</strong> {menu.status}
            <br />
            <strong>Temps de préparation:</strong> {menu.preparationTime}
            <br />
            <strong>Éléments:</strong> {menu.elements.join(', ')}
          </Card.Text>
          <Card.Text>
            <strong>Prix:</strong> {menu.price} €
          </Card.Text>
        </Card.Body>
        {hovered && (
          <div className="actions">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-edit">Éditer</Tooltip>}
            >
              <FaEdit className="icon-blue" onClick={() => setModalOpen(true)} />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-delete">Supprimer</Tooltip>}
            >
              <FaTrash className="icon-red" onClick={() => setModalOpen(true)} />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-publish">
                  {menu.status === 'published' ? 'Enlever de la publication' : 'Publier'}
                </Tooltip>
              }
            >
              {menu.status === 'published' ? (
                <FaEyeSlash className="icon-green" />
              ) : (
                <FaEye className="icon-green" />
              )}
            </OverlayTrigger>
          </div>
        )}
      </Card>

      {/* Modals */}
      {modalOpen && (
        <>
          {/* <EditionModal onClose={() => setModalOpen(false)} />
          <DeleteModal onClose={() => setModalOpen(false)} /> */}
        </>
      )}
    </div>
  );
};

export default MenuCard;




// // MenuCard.tsx
// import React, { useState } from 'react';
// import { Card, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { FaEdit, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';
// // Assure-toi d'importer correctement ton composant Modal
// import './MenuCard.css'; // Assure-toi d'importer correctement ton fichier de styles

// interface MenuCardProps {
//   menu: {
//     id: number;
//     name: string;
//     status: string;
//     preparationTime: string;
//     elements: string[];
//     images: string[];
//     price: number;
//   };
// }

// const MenuCard: React.FC<MenuCardProps> = ({ menu }) => {
//   const [hovered, setHovered] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);

//   const handleMouseEnter = () => {
//     if (!modalOpen) {
//       setHovered(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!modalOpen) {
//       setHovered(false);
//     }
//   };

//   return (
//     <div className="menu-card-wrapper">
//       <Card
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         // className={`${hovered ? 'hovered' : ''}`}
//         className='bg-light.bg-gradient'
//       >
//         <Carousel className='bg-primary px-4'>
//           {menu.images.map((image, index) => (
//             <Carousel.Item key={index}>
//               <img
//                 className="d-block w-100 rounded-circle"
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 width={100} height={200}
//               />
//             </Carousel.Item>
//           ))}
//         </Carousel>
//         <Card.Body>
//           <Card.Title>{menu.name}</Card.Title>
//           <Card.Text>
//             <strong>Status:</strong> {menu.status}
//             <br />
//             <strong>Temps de préparation:</strong> {menu.preparationTime}
//             <br />
//             <strong>Éléments:</strong> {menu.elements.join(', ')}
//           </Card.Text>
//           <Card.Text>
//             <strong>Prix:</strong> {menu.price} €
//           </Card.Text>
//         </Card.Body>
//         {hovered && (
//           <div className="actions">
//             <OverlayTrigger
//               placement="bottom"
//               overlay={<Tooltip id="tooltip-edit">Éditer</Tooltip>}
//             >
//               <FaEdit className="icon-blue" onClick={() => setModalOpen(true)} />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="bottom"
//               overlay={<Tooltip id="tooltip-delete">Supprimer</Tooltip>}
//             >
//               <FaTrash className="icon-red" onClick={() => setModalOpen(true)} />
//             </OverlayTrigger>
//             <OverlayTrigger
//               placement="bottom"
//               overlay={
//                 <Tooltip id="tooltip-publish">
//                   {menu.status === 'published' ? 'Enlever de la publication' : 'Publier'}
//                 </Tooltip>
//               }
//             >
//               {menu.status === 'published' ? (
//                 <FaEyeSlash className="icon-green" />
//               ) : (
//                 <FaEye className="icon-green" />
//               )}
//             </OverlayTrigger>
//           </div>
//         )}
//       </Card>

//       {/* Modals */}
//       {modalOpen && (
//         <>
//           {/* <EditionModal onClose={() => setModalOpen(false)} />
//           <DeleteModal onClose={() => setModalOpen(false)} /> */}
//         </>
//       )}
//     </div>
//   );
// };

// export default MenuCard;



