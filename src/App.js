import { BrowserRouter as Router, Route} from 'react-router-dom';
import Resume from './components/Resume';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact'
import TechStack from './components/TechStack'
import You from './components/You'
import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function App() {
  
  const [data, setData] = useState(null);

  const getData=()=>{
    fetch('info.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myJson) {
        setData(myJson)
    });
  }
    
    useEffect(()=>{
      getData()
    },[])

  return (
    <Router>
      <div className="app">
        <Header headerData={data}/>
        <Route path="/">
          <About />
          <TechStack />
          <Resume />
          {/* <You /> */}
          <Contact />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
