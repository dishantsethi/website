import { BrowserRouter as Router, Route} from 'react-router-dom';
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
        <Route path="/">
          <About />
          <TechStack />
          <Resume />
          <Contact />
        </Route>
        <Route exact path="/website/resume/">
          <Resume />
        </Route>
        <Route exact path="/website/about/">
          <About />
        </Route>
        <Route exact path="/website/technology/">
          <TechStack />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
