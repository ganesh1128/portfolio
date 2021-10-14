import React from 'react';
import { Card } from 'react-bootstrap';
import "../Tabs.css";

function ProjectCards() 
{ 
        return <div><Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>project 1 </h2></Card.Title>
          <Card.Text>
            <h6> my project 1
            </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body >
          <Card.Title><h2>project 2</h2></Card.Title>
          <Card.Text>
            <h6>my project 2 </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className = 'card-border'>
        <Card.Body>
          <Card.Title><h2>project 3 </h2></Card.Title>
          <Card.Text>
            <h6>my projrct 3</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
} 

export default ProjectCards;