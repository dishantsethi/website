import Typical from "react-typical";
import Theme from './Theme';
import {
  isMobile
} from "react-device-detect";
import { useEffect } from "react";

function Header(props) {

  useEffect(() => {
    {isMobile && alert("Visit this site from Desktop/Laptop for seamless User Experience")}
  },[])
  
    return (
      <header id="home" style={{height: '100%'}}>
        { props.headerData && <a href={props.headerData.github_link} id="github" target="blank" style={{position: 'absolute', transform: 'rotate(315deg)'}}>
          <span class="iconify" data-icon="ri-github-line" data-inline="false" style={{backgroundColor: 'white'}}></span>
        </a> }
        <div className="square"></div>
        <div className="header-data">
          <h2 style={{fontFamily: 'sans-serif', marginTop: '20px', fontWeight: 'bold'}}>
            {props.headerData && <Typical steps={[props.headerData.basic_info.name]} />}
          </h2>
          <h4>
            {props.headerData && <Typical steps={props.headerData.basic_info.titles} loop={50} wrapper="p" />}
          </h4>
          <div>
            <Theme />
          </div>
        </div>
      </header>
    );
}

export default Header;