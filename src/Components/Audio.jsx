import { Card } from 'react-bootstrap';

const Audio = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ marginBottom: '37px' }}>Audio</Card.Title>
        <div className="card__content-audio">
          <h1>2</h1>
          <div className="card__content-audio_text">PLAYING</div>
          <div className="card__content_size">
            <p>Total</p>
            <h2>5</h2>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Audio;
