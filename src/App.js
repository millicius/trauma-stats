import './App.css';
import IkeltiOperacija from './components/IkeltiOperacija';
import VisosOperacijos from './components/VisosOperacijos';

function App() {
  return (
    <div className="App">
      <h3>OPERACIJŲ ZURNALAS '22</h3>
      <IkeltiOperacija />
      <VisosOperacijos />
    </div>
  );
}

export default App;
