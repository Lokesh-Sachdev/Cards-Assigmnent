import React from 'react';
import { Card } from 'react-bootstrap';

const Lighting = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ marginBottom: '37px' }}>Lighting</Card.Title>
        <div className="card__content-audio">
          <h1>32</h1>
          <div
            className="card__content-audio_text"
            style={{ padding: '7px 15px' }}
          >
            ON
          </div>
          <div className="card__content_size">
            <p>Total</p>
            <h2>43</h2>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Lighting;
