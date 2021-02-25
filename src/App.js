import { Route, Switch } from 'react-router-dom';

import './App.scss';

// Components
import Header from './components/Header';
import Gallery from './components/Gallery';
import Image from './components/Image';

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Gallery} />
        <Route path="/photos/:id" component={Image} />
      </Switch>
    </div>
  );
}

export default App;
