import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home'
import Frame from './Frame';

class _App extends React.Component {

  render (){
    return (
      <HashRouter>
          <Route component={ Nav } />
          <Route path='/' component={ Home } exact />
          <Route path='/frame' component={ Frame } />
      </HashRouter>
    )
  }
};

ReactDOM.render(<_App />, root);
