import { useSelector } from 'react-redux';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <HomePage />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
