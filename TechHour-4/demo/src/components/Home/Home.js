import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import card1 from "../../assets/imgs/card1.jpeg";
import card2 from "../../assets/imgs/card2.jpeg";
import card3 from "../../assets/imgs/card3.jpeg";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Single page applications demo!!</h2>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        {/* <Link to="/about">about</Link> */}
      </div>
    );
  }
}

export default Home;
