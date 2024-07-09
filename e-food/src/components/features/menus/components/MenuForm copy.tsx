import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { BsPlusCircle, BsTrash } from 'react-icons/bs'; // Importe les icônes nécessaires

const MenuForm: React.FC = () => {
  const [designation, setDesignation] = useState('');
  const [prix, setPrix] = useState('');
  const [temps, setTemps] = useState('');
  const [note, setNote] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [components, setComponents] = useState<{ designation: string; type: string }[]>([]);
  const [componentDesignation, setComponentDesignation] = useState('');
  const [componentType, setComponentType] = useState('');

  const handleAddComponent = () => {
    if (componentDesignation && componentType) {
      setComponents([...components, { designation: componentDesignation, type: componentType }]);
      setComponentDesignation('');
      setComponentType('');
    }
  };

  const handleRemoveComponent = (index: number) => {
    const updatedComponents = [...components];
    updatedComponents.splice(index, 1);
    setComponents(updatedComponents);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Ici, tu peux gérer l'envoi des données du formulaire, par exemple avec Redux ou directement à une API
    console.log({
      designation,
      prix,
      temps,
      note,
      images,
      components,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <fieldset>
                  <legend className='bg-primary z-2'>Menu</legend>
                    <div className='d-flex'>
                      <div>

                      </div>
                      <div>

                      </div>
                    </div>
                  <Form.Group controlId="designation">
                    <Form.Label>Désignation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez la désignation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="prix">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez le prix"
                      value={prix}
                      onChange={(e) => setPrix(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="temps">
                    <Form.Label>Temps de préparation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez le temps de préparation"
                      value={temps}
                      onChange={(e) => setTemps(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Entrez la note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="images">
                    <Form.Label>Images</Form.Label>
                    <Form.Control
                      type="file"
                      multiple
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const files = e.target.files;
                        if (files) {
                          const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
                          setImages(fileArray);
                        }
                      }}
                    />
                    {images &&
                      images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} style={{ maxWidth: '100px', marginRight: '10px' }} />
                      ))}
                  </Form.Group>
                </fieldset>

                {/* <fieldset>
                  <legend>Ses composants</legend>

                  <Form.Group controlId="componentDesignation">
                    <Form.Label>Désignation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Entrez la désignation"
                      value={componentDesignation}
                      onChange={(e) => setComponentDesignation(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="componentType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      as="select"
                      value={componentType}
                      onChange={(e) => setComponentType(e.target.value)}
                    >
                      <option value="">Sélectionnez le type</option>
                      <option value="Type 1">Type 1</option>
                      <option value="Type 2">Type 2</option>
                      <option value="Type 3">Type 3</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="success" onClick={handleAddComponent}>
                    <BsPlusCircle /> Ajouter
                  </Button>
                </fieldset> */}

                <hr />

                {/* <h4>Composants ajoutés</h4> */}
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {components.map((component, index) => (
                    <div key={index} className="added-component" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      {component.designation}-{component.type}
                      <Button variant="danger" size="sm" onClick={() => handleRemoveComponent(index)} style={{ marginLeft: '10px' }}>
                        <BsTrash /> Supprimer
                      </Button>
                    </div>
                  ))}
                </div>

                <Button variant="primary" type="submit">
                  Enregistrer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuForm;
