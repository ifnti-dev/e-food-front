import React, { useState } from 'react';
import { Card, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';
import { PubliciteItemProps } from '../../types/interfacesPublicite';
import './PubliciteItem.css'; // Import du fichier de style pour les personnalisations supplémentaires

const PubliciteItem: React.FC<any> = ({ publicite }) => {
  const [isHovered, setIsHovered] = useState(false);

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
                
              />
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
              <FaEdit className="icon-blue" />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-delete">Supprimer</Tooltip>}
            >
              <FaTrash className="icon-red" />
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
