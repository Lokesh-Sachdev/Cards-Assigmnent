import React from 'react';
import { Card } from 'react-bootstrap';

const Displays = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ marginBottom: '37px' }}>Displays</Card.Title>
        <div className="card__content">
          <div className="card__content-display">
            10<span>/16</span>
          </div>
          <hr />
          <div className="card__content_size">
            <p>On Time</p>
            <h2>00:00</h2>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Displays;
