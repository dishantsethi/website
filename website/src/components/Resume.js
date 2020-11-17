import React from 'react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import { Card } from 'react-bootstrap';

function Resume() {
    return (
      <div className="container">
        <Card.Header>Resume</Card.Header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8">
                <div className="app__sidebar">
                  <Sidebar />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="app__sidebar-two">
                  <RightSidebar />
                </div>
              </div>
            </div>  
        </div>
      </div>
    );
}

export default Resume;