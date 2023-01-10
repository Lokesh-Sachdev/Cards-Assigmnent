import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const AirQuality = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Air Quality</Card.Title>
        <div className="card__content">
          <div className="card__content-air">72</div>
          <div className="card__content-secondary">
            <div>
              <AiOutlineArrowUp style={{ color: 'var(--color-green)' }} />
              <p>93</p>
            </div>
            <hr />
            <div>
              <AiOutlineArrowDown style={{ color: '#ddd919' }} />
              <p>61</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AirQuality;
