import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from './Router/Router';


function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer/>

    </div>
  );
}

export default App;
