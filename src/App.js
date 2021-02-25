import './App.scss';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Gallery from './components/Gallery';
import Image from './components/Image';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/photo/:id" component={Image} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
