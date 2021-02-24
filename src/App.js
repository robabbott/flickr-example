import './App.scss';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Gallery from './components/Gallery';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route component={Header} />
        <Route component={Gallery} />
      </div>
    </BrowserRouter>
  );
}

export default App;
