import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './src/components/contacts/Contacts';
import AddContact from './src/components/contacts/AddContact';
import EditContact from './src/components/contacts/EditContact';
import Header from './src/components/layout/Header';
import About from './src/components/pages/About';
import NotFound from './src/components/pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
          {
            helllo
            // <Switch>
            //   <Route exact path="/" component={Contacts} />
            //   // <Route exact path="/contact/add" component={AddContact} />
            //   // <Route exact path="/contact/edit/:id" component={EditContact} />
            //   // <Route exact path="/about" component={About} />
            //   <Route component={NotFound} />
            // </Switch>
          }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
