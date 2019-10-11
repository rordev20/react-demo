import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Cart from './components/cart/Cart';

import './App.css';

const App = () => (
	<Router>
	  <Fragment>
	    <Navbar />
	    <Route exact path='/' component={Landing} />
	    <section className='container'>
	      <Switch>
          <Route exact path='/cart' component={Cart} />
	      </Switch>
	    </section>
	  </Fragment>
  </Router>
);


export default App;
