import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import MenuSidebar from './components/MenuSidebar';

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
      <div className="app">
        <Header headerData={data}/>
        <MenuSidebar headerData={data} />
      </div>
  );
}

export default App;
