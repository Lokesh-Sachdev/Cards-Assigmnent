import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineFire } from 'react-icons/ai';
import { FaRegSnowflake } from 'react-icons/fa';

const Temperature = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Temperature</Card.Title>
        <div className="card__content">
          <div className="card__content-temp">
            21<span className="card__content-temp_symbol">&#176;C</span>
          </div>
          <div className="card__content-secondary">
            <div>
              <AiOutlineFire
                style={{ color: 'red', fontSize: '20px', margin: '10px 5px' }}
              />
              <p>
                26<span className="card__content-temp_symbol">&#176;C</span>
              </p>
            </div>
            <hr />
            <div>
              <FaRegSnowflake
                style={{
                  color: 'skyblue',
                  fontSize: '20px',
                  margin: '10px 5px',
                }}
              />
              <p>
                18<span className="card__content-temp_symbol">&#176;C</span>
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Temperature;
