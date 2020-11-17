import React from 'react';
import { Badge, Card } from 'react-bootstrap';

function TechStack() {
    return (
      <div className="container">
        <Card.Header>Technology Stack</Card.Header>
        <h2 className="container-fluid">
          <Badge pill variant="secondary" className="tech">Python</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Django</Badge>{' '}
          <Badge pill variant="secondary" className="tech">DjangoRestFramework</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Java</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Gitlab CI</Badge>{' '}
          <Badge pill variant="secondary" className="tech">AWS</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Git</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Postgres</Badge>{' '}
          <Badge pill variant="secondary" className="tech">NGINX</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Docker</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Kubernetes</Badge>{' '}
          <Badge pill variant="secondary" className="tech">React JS</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Vue JS</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Nuxt JS</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Google Appscripts</Badge>{' '}
          <Badge pill variant="secondary" className="tech">Linux</Badge>{' '}
        </h2>
      </div>
    );
}

export default TechStack;