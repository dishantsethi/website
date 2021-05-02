import coding from '../../src/assets/coding.png';
import Typical from "react-typical";
import Theme from './Theme';
import MenuSidebar from './MenuSidebar';

function Header(props) {
  
    return (
      <header id="home" style={{height: window.innerHeight}}>
        { props.headerData && <a href={props.headerData.github_link} id="github" target="blank" style={{position: 'absolute', marginTop: '1px', transform: 'rotate(315deg)', marginLeft: '2px', marginTop: '10px'}}>
          <span class="iconify" data-icon="ri-github-line" data-inline="false"></span>
        </a> }
        <div className="square"></div>
        <div className="header-data"  style={{height: '100%'}}>
          <img src={coding} className="logo"></img>
          <h2 style={{fontFamily: 'sans-serif', marginTop: '20px', fontWeight: 'bold'}}>
            {props.headerData && <Typical steps={[props.headerData.basic_info.name]} />}
          </h2>
          <h4>
            {props.headerData && <Typical steps={props.headerData.basic_info.titles} loop={50} wrapper="p" />}
          </h4>
          <div>
            <Theme />
          </div>
        {props.headerData && <MenuSidebar data={props.headerData.linkedin_link} />}
        </div>
      </header>
      // <div>
        // {/* <Navbar bg="light" variant="light" expand="lg">
        // <Navbar.Brand>Dishant Sethi || Software Engineer</Navbar.Brand>
        // <Navbar.Brand className="ml-auto">
        //     <a href="https://dishantsethi.wordpress.com" rel="noreferrer" target="_blank">
        //       <Button variant="outline-primary" size="sm">Blog</Button>
        //     </a>
        // </Navbar.Brand>
        // </Navbar> */}
      // </div>
    );
}

export default Header;