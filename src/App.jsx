import logo from './Assets/logo.svg';
import {
  AirQuality,
  Audio,
  Displays,
  Lighting,
  Temperature,
} from './Components';

import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="app__container">
        <div style={{ marginBottom: '2rem' }}>
          <img src={logo} alt="logo" width="300px" />
        </div>
        <div className="cards">
          <AirQuality />
          <Temperature />
          <Audio />
          <Displays />
          <Lighting />
        </div>
      </div>
    </div>
  );
}

export default App;
