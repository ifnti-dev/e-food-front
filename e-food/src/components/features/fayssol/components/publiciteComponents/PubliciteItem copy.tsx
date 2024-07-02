import React, { useState } from 'react';
import { Card, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';
import { PubliciteItemProps } from '../../types/interfacesPublicite';
import './PubliciteItem.css'; // Import du fichier de style pour les personnalisations supplémentaires
import EditionModal from '../partials/EditionModal';
import DeleteModal from '../partials/DeleteModal';
import { useHoverContext } from '../../context/HoverContext';

const PubliciteItem: React.FC<any> = ({ publicite }) => {
  // const [isHovered, setIsHovered] = useState(false);
  const { isHovered, setIsHovered } = useHoverContext();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="publicite-item-wrapper">
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={publicite.etat === 'published' ? 'published' : ''}
      >
        <Carousel>
          {/* {publicite.images.map((image:any, index:any) => ( */}
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                // alt={`Image ${index + 1}`}
                width={200} height={180}
              />
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlf_KjJsN2sKswYMA2yk5dJvqg63XWVecU_w&s" width={200} height={180} className="d-block w-100 rounded" alt="..."/>

            </Carousel.Item>
          {/* ))} */}
        </Carousel>
        <Card.Body>
          <Card.Title>{publicite.titre}</Card.Title>
          <Card.Text>{publicite.description}</Card.Text>
        </Card.Body>
        {isHovered && (
          <div className="actions">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-edit">Éditer</Tooltip>}
            >
              {/* <FaEdit className="icon-blue" onClick={()=>alert('Edition')}/> */}
              <EditionModal/>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-delete">Supprimer</Tooltip>}
            >
              {/* <FaTrash className="icon-red" /> */}
              <DeleteModal pub_id={publicite.id}/>
            </OverlayTrigger>
            {publicite.etat === "published" ? (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-unpublish">Enlever de la publication</Tooltip>}
              >
                <FaEyeSlash className="icon-green" />
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-publish">Publier</Tooltip>}
              >
                <FaEye className="icon-green" />
              </OverlayTrigger>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default PubliciteItem;
