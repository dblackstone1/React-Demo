import './App.css';
import ImageRow from './components/imageRow/ImageRow';
import RunSimulation from './components/runSimulation/RunSimulation';
import SoftwareSimulationData from './components/softwareSimulationData/SoftwareSimulationData';
import HardwareSimulationData from './components/hardwareSimulationData/HardwareSimulationData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simulation Dashboard</h1>
        <div className="section">
          <ImageRow />
          <RunSimulation />
        </div>
        <div className="section">
          <HardwareSimulationData />
        </div>
        <div className="section">
          <SoftwareSimulationData />
        </div>
      </header>
    </div>
  );
}

export default App;
