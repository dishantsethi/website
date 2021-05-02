import React, { useEffect, useState }  from "react";
import '../../src/footer.css';

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
                        <a>About</a>
                        <a>Skills</a>
                        <a>Experience</a>
                        <a>Projects</a>
                        <a>Education</a>
                        <a>About You</a>
                        <a>Hire Me</a>
                        <a>Donate</a>
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
                    <a href={props.data} target="blank"><span class="iconify" data-icon="logos:linkedin-icon" data-inline="false"></span></a>
                </div>
                <div id="tray">
                    <span id="system-time">{state.getHours()}:{ state.getMinutes()<10 ? "0"+ state.getMinutes() : state.getMinutes()}:{state.getSeconds()}<br/>{state.getDay()+1}/{state.getMonth()}/{state.getFullYear()}</span>
                    <span id="language">ENG</span>
                </div>
            </div>
        </div>
    );
}

export default MenuSidebar;