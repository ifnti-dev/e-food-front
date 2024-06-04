import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import PubliciteItem from './PubliciteItem';
import { Publicite } from '../../types/interfacesPublicite'; // Assurez-vous que le chemin est correct

const PubliciteList = ({ publicites, isLoading }: { publicites: Publicite[], isLoading: boolean }) => {
  return (
    <Container>
      {!isLoading ? (
         <Row xs={1} sm={2} md={3} lg={4} xl={5}>
         {publicites.map((publicite: Publicite, index: number) => (
           <Col key={index}>
             <PubliciteItem publicite={publicite} />
           </Col>
         ))}
       </Row>
      ) : (
        <>
          {publicites.length === 0 ? (
            <div className='text-center'>
              <Spinner animation="border" role="status">
              <span className="sr-only">Chargement...</span>
            </Spinner>
            </div>
            
          ) : (
           
           <p>Pas de publicité</p>
          )}
        </>
      )}
    </Container>
  );
};

export {PubliciteList};
