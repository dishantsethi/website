import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { isBrowser, isMobile, browserName, browserVersion, osName, osVersion, isChrome, isIOS } from "react-device-detect";

function You(props) {
    const [showAboutYou, setShowAboutYou] = useState();
    const [data, setData] = useState({});
    const [battery, setBattery] = useState();
    const [ip, setIp] = useState();
    const [cromeData, setCromeData] = useState({});
    function fetchIP(){
      fetch('https://ipapi.co/json').then(res => res.json()).then(data => setIp(data))
    }
    
    useEffect(() => {
      if(isChrome && !isIOS ){
        window.navigator.getBattery().then(function(b){
          setBattery(b.level)
        })    
        const height = window.innerHeight;
        const width = window.innerWidth;
        const referrer = window.document.referrer;
        const speed = window.navigator.connection.downlink;
        const type = window.navigator.connection.effectiveType;
        const mode = window.screen.orientation.type.indexOf('landscape') > -1 ? 'landscape' : 'portrait';
        const memory = window.navigator.deviceMemory;
        setCromeData({'mode': mode, 'speed': speed, 'type': type, 'memory': memory, 'height': height, 'width': width, 'referrer': referrer})
      }
      // if(isChrome && !isIOS){
      // }
      setData({...cromeData })
      fetchIP();    
    }, [])
    function showAboutYouHandler(){
        setShowAboutYou(true)
    }
    
    function closeAboutYouHandler(){
        setShowAboutYou(false)
    }
    
    return (
        <div style={{margin: 'auto'}}>
        <button className="about_button" onClick={showAboutYouHandler}>
        <ion-icon name="person-add-outline"></ion-icon>            
        <div style={{display: 'inline', margin: '5px'}}>About You</div>
        </button>
        {showAboutYou && 
        <div className="overlay">
          <Modal.Dialog size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton onClick={closeAboutYouHandler}>
              <Modal.Title>Lets C what I know about YOU</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div style={{overflowY: 'scroll', height: '50vh'}}>
              {ip &&<p>Hi Explorer, You appear to be visiting my website from ip address<span style={{color: 'blue'}}> {ip.ip}</span> whose internet service provider is <span style={{color: 'blue'}}>{ip.org}</span></p>}
              <p>I can see that you are using {isBrowser && <span style={{color: 'blue'}}>desktop</span>}{isMobile && <span style={{color: 'blue'}}>mobile</span>} specifically { browserName && <span style={{color: 'blue'}}>{browserName}</span>} browser of version {browserVersion && <span style={{color: 'blue'}}>{browserVersion}</span>}</p>
              <p>Your OS seem to be {osName && <span style={{color: 'blue'}}>{osName}</span>} of version {osVersion && <span style={{color: 'blue'}}>{osVersion}</span>} {cromeData.memory && <span style={{color: 'blue'}}> having {cromeData.memory}GB</span>} of RAM</p>
              {ip && <p>You seem to be at <span style={{color: 'blue'}}>{ip.latitude}</span> latitude and <span style={{color: 'blue'}}>{ip.longitude}</span> longitude in <span style={{color: 'blue'}}>{ip.city} {ip.region}</span> of country <span style={{color: 'blue'}}>{ip.country_name}</span> whose capital is <span style={{color: 'blue'}}>{ip.country_capital}</span> and currency is <span style={{color: 'blue'}}>{ip.currency} {ip.currency_name}</span></p>}
              {cromeData.height && <p>Your device's screen height is <i style={{color: 'blue'}}>{cromeData.height}</i> pixels and screen width is <i style={{color: 'blue'}}>{cromeData.width}</i> pixels, Your device is currently in the {cromeData.mode && <i style={{color: 'blue'}}>{cromeData.mode}</i>} mode and seems to be tilted at 0 degree angle</p>}
              {cromeData.speed && <p>Your network speed seem to be around {cromeData.speed}mbps which is effectively a {cromeData.type} network</p>}
              {battery && <p>Your battery seems to be having <i style={{color: 'blue'}}>{battery * 100}%</i> charge.</p>}
              { cromeData.referrer && <p>You seem to have arrived here from the website <i style={{color: 'blue'}}>{cromeData.referrer}</i></p> }
            </div>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
    </div> 
    );
}

export default You;