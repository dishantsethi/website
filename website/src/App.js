import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Resume from './components/Resume';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact'
import TechStack from './components/TechStack'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/">
          <About />
          <TechStack />
          <Resume />
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/technology">
          <TechStack />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
