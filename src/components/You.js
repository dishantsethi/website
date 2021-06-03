// import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
// // import { useEffect, useState } from 'react';


// function You() {

//     const [data, setData] = useState([]);
//     const height = window.innerHeight;
//     const width = window.innerWidth;
//     const angle = window.screen.orientation.angle;
//     const mode = window.screen.orientation.type.indexOf('landscape') > -1 ? 'landscape' : 'portrait';
//     const referrer = window.document.referrer;
//     const memory = window.navigator.deviceMemory;
//     const speed = window.navigator.connection.downlink;
//     const connection = window.navigator.connection.effectiveType;
//     useEffect(() => {
//         fetchDataPromise()
//     }, [])

//     const fetchDataPromise = () => {
//         window.navigator.getBattery()
//         .then(result => {
//             setData(result.level)
//         })
//     }


//     return(
//         <div className="container">
//                 <section class="site-section" id="section-about">
//                     <div class="container-fluid">
//                         <Card.Header>About You</Card.Header>
//                         <div class="row mb-5 align-items-center">
//                             <div class="col-md-8">
//                                 <p variant="dark">Height {height}</p>
//                                 <p variant="dark">Width {width}</p>
//                                 <p variant="dark">window screen orientation type {mode}</p>
//                                 <p variant="dark">Angle {angle}<span>&#176;</span></p>
//                                 {referrer === ""?<div></div>:<p variant="dark">You seem to have arrived here from the website {referrer}</p>}
//                                 <p variant="dark">Memory {memory}GB RAM</p>
//                                 <p variant="dark">Speed {speed}mbps</p>
//                                 <p>Connection {connection} network</p>
//                                 <p>Battery {Number(data*100)}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//     )
// }



// // class You extends Component {

// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             ,
// //             ,
// //             ,
// //             ,
// //             ,
// //             ,
// //             ,
// //             ,
// //             // battery: ""
// //         };

// //         // this.setState({
// //         //     battery: window.navigator.getBattery().then((data)=>data.level)
// //         // })
// //     }
    

    
// //     render() {
// //         let battery = 0;
// //         window.navigator.getBattery().then(function(battery) {
// //             battery = battery.level * 100;
// //         });
// //         return (
            
// //         )
// //     }
// // }
// export default You;
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function You(props) {
    const [showAboutYou, setShowAboutYou] = useState();

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
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeAboutYouHandler}>
              <Modal.Title style={{color: 'black'}}>Lets C what I know about YOU</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{color: 'black'}}>
              <p>Thanks for showing interest</p>
            </Modal.Body>
          </Modal.Dialog>
        </div>  
       }
    </div> 
    );
}

export default You;