import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUpForm from './pages/signupform';
import SingIn from './components/signin';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/signup-form' component={SignUpForm} />
          <Route path='/signin' component={SingIn} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
