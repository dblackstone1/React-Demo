import './ImageRow.css';
import launcher from '../../images/launcher.png';
import diagram from '../../images/diagram.png';

function ImageRow() {
  return (
    <div className="image-row">
      <h2 className="section-title">Launcher and Diagram</h2>
      <div className="image-container">
        <img src={launcher} alt="Launcher" className="image" />
        <img src={diagram} alt="Diagram" className="image" />
      </div>
    </div>
  );
}

export default ImageRow;
