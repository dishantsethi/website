import React, { useEffect, useState }  from "react";
import { Col, Row } from "react-bootstrap";
import '../../src/footer.css';
import { isBrowser } from "react-device-detect";

function MenuSidebar(props) {
    const [state, setState] = useState(new Date())

    useEffect(() => {
        var timer = setInterval(() => setState(new Date()), 1000)
        return function cleanup(){
            clearInterval(timer)
        }
    })
    
    return (
        <div id="taskbar-wrapper">
            <div id="taskbar">
                <div id="quickstart">
                    <div class="dropup">
                      <div class="dropup-content">
                        <Row class="ow" style={{width: '40vw', backgroundColor: 'currentColor', margin: '0px', paddingTop: '10px', paddingLeft:'7px', paddingRight: '7px' }}>
                          <Col style={{color: 'white'}}>
                            <Row id="menu-icon"> <ion-icon name="happy-outline"></ion-icon> About</Row>
                            <Row id="menu-icon"> <ion-icon name="bar-chart-outline"></ion-icon> Skills</Row>
                            <Row id="menu-icon"> <ion-icon name="desktop-outline"></ion-icon> Experience</Row>
                            <Row id="menu-icon"> <ion-icon name="code-outline"></ion-icon> Projects</Row>
                            <Row id="menu-icon"> <ion-icon name="book-outline"></ion-icon> Education</Row>
                            <Row id="menu-icon"> <ion-icon name="person-add-outline"></ion-icon> About You</Row>
                            <Row id="menu-icon"> <ion-icon name="git-network-outline"></ion-icon> Hire Me</Row>
                            <Row id="menu-icon"> <ion-icon name="card-outline"></ion-icon> Donate</Row>
                          </Col>
                          {
                            isBrowser && 
                          <Col style={{width: '10px'}}>
                            <div className="metro">
                              <div className="l1">
                                <li className="item i1">
                                  <a href="https://google.com" target='blank' style={{display: 'block', background: 'unset'}}>
                                  <div style={{marginTop: '4%'}}>
                                  <ion-icon name="logo-chrome"></ion-icon>
                                  <div> Chrome</div>
                                  </div>
                                  </a>
                                </li>
                                <li className="item i2">
                                  <a href="https://www.google.com/search?q=videos" target='blank' style={{display: 'block', background: 'unset'}}>
                                  <div style={{marginTop: '4%'}}>
                                  <ion-icon name="videocam-outline"></ion-icon>
                                  <div> Videos</div>
                                  </div>
                                  </a>
                                </li>
                              </div>
                              <div className="l1">
                                <li className="item i3">
                                  <a href="https://www.youtube.com/" target='blank' style={{display: 'block', background: 'unset'}}>
                                  <div style={{marginTop: '4%'}}>
                                  <ion-icon name="logo-youtube"></ion-icon>
                                  <div> Youtube</div>
                                  </div>
                                  </a>
                                </li>
                              </div>
                              <div className="l1">
                                <li className="item i4">
                                  <a href="https://myaccount.google.com/" target='blank' style={{display: 'block', background: 'unset'}}>
                                  <div style={{marginTop: '4%'}}>
                                  <ion-icon name="settings-outline"></ion-icon>
                                  <div> Control Panel</div>
                                  </div>
                                  </a>
                                </li>
                                <li className="item i5">
                                  <a href="https://www.netflix.com/" target='blank' style={{display: 'block', background: 'unset'}}>
                                  <div style={{marginTop: '4%'}}>  
                                  <ion-icon name="tv-outline"></ion-icon>
                                  <div>Movie & TV</div>
                                  </div>
                                  </a>
                                </li>
                              </div>
                              <div className="l1">
                                <li className="item i6">
                                  <a href="https://photos.google.com/" target='blank' style={{display: 'block', background: 'unset'}}>
                                  <div style={{marginTop: '4%'}}>
                                  <ion-icon name="image-outline"></ion-icon>
                                  <div> Photos</div>
                                  </div>
                                  </a>
                                </li>
                              </div>
                            </div>
                          </Col>
                          }
                          
                        </Row>
                      </div>
                      <span class="iconify" data-icon="ant-design:windows-filled" data-inline="false" style={{boxShadow: '100px'}}></span>
                    </div>
                    <div class="dropup">
                      <div class="dropup-content">
                        <a>Ah! No New message. You're Single!</a>
                      </div>
                      <span class="iconify" data-icon="fluent:mail-28-filled" data-inline="false"></span>
                    </div>
                    <a href="https://www.google.com" title="Open New Tab" target="blank"><span class="iconify" data-icon="grommet-icons:chrome" data-inline="false"></span></a>
                    <a href="https://www.netflix.com" target="blank"><span class="iconify" data-icon="logos:netflix-icon" data-inline="false"></span></a>
                    {props.headerData && <a href={props.headerData.linkedin_link} target="blank"><span class="iconify" data-icon="logos:linkedin-icon" data-inline="false"></span></a>}
                </div>
                <div id="tray">
                    <span id="system-time">{state.getHours()}:{ state.getMinutes()<10 ? "0"+ state.getMinutes() : state.getMinutes()}:{state.getSeconds()}<br/>{state.getDay()+2}/{state.getMonth()}/{state.getFullYear()}</span>
                    <span id="language">ENG</span>
                </div>
            </div>
        </div>
    );
}

export default MenuSidebar;