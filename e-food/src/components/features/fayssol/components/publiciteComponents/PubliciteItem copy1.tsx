import React, { useState } from 'react';
import { Card, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEdit, FaTrash, FaEyeSlash, FaEye } from 'react-icons/fa';
import { PubliciteItemProps } from '../../types/interfacesPublicite';


const PubliciteItem: React.FC<any> = ({ publicite }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={publicite.etat === 'published' ? 'published' : ''}
    >
      <Carousel>
        {/* {publicite.images.map((image:any, index:any) => ( */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
              // alt={`Image ${index + 1}`}
            />
          </Carousel.Item>
        {/* ))} */}
      </Carousel>
      <Card.Body>
        {isHovered && (
          <div className="actions">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-edit">Éditer</Tooltip>}
            >
              <FaEdit />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-delete">Supprimer</Tooltip>}
            >
              <FaTrash />
            </OverlayTrigger>
            {publicite.etat === "published" ? (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-unpublish">Enlever de la publication</Tooltip>}
              >
                <FaEyeSlash />
              </OverlayTrigger>
            ) : (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-publish">Publier</Tooltip>}
              >
                <FaEye />
              </OverlayTrigger>
            )}
          </div>
        )}
        <Card.Title>{publicite.titre}</Card.Title>
        <Card.Text>{publicite.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PubliciteItem;
