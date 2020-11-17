import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import pic from '../assets/pic.jpg'

function About() {
    return (
      <div className="container">
      <section class="site-section" id="section-about">
        <div class="container-fluid">
          <Card.Header>About</Card.Header>
          <div class="row mb-5 align-items-center">
            <div class="col-md-4 mb-5">
              <img src={pic} class="img-fluid" /> 
            </div>
            <div class="col-md-8">
            <ListGroup>
              <ListGroup.Item variant="dark">A 22 year old, born and raised in India.</ListGroup.Item>
              <ListGroup.Item variant="danger">Just like Mr Jobs said, <strong>"Stay Hungry, Stay Foolish"</strong>, He's always curious of technologies and likes to code</ListGroup.Item>
              <ListGroup.Item variant="dark">He is available on the internet with the username <strong>dishantsethi</strong>. Feel free to reach him on <a className="color" href="https://www.linkedin.com/in/dishant-sethi-0b1006157/">LinkedIn</a>.</ListGroup.Item>
              <ListGroup.Item variant="danger">He drinks too much coffee</ListGroup.Item>
            </ListGroup>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
}

export default About;