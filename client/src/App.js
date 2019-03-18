import React, {
  Component
} from 'react';

import { Navbar, Jumbotron, Button, CardDeck, Card, Container, Row, DropdownButton, Dropdown, Col } from 'react-bootstrap';

{/*TODO List:
    - Find pictures for the cards
    - Layout the cards in a more organized way
    - Create login popover
    - Create popovers for each tab
    - import some form of graphing system 
  */}

class App extends Component {
  state = {
    loading: true,
    Infromation: null
  };

  async componentDidMount() {
    const url = "http://localhost:3001/api/getData";
    const response = await fetch(url);
    const getData = await response.json();
    this.setState({Infromation: getData.data[0], loading: false });
    console.log(getData.data[0]);
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({
        intervalIsSet: null
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }
    return(
      <div>
        {/* Below is listed the custom css for the bootstrap module. For most custom things
        relating to styles we should define them in the index.css file, but for special
        things such as bootstrap we need to do them inline like below. */}
          <style type="text/css">
          {`
          .bg-red {
            background-color: #CD1041;
          }
          `}
        </style>
        {/* Here is the start of the website. This will be the navbar at the top of the site that will
        render throught the whole site. This is based off of the traditional bootstrap navbar.
        Something to notice is that all the assets such as the logo are coming from the assets file located at
        client\src\assets. Anything that has to do with some sort of picture or outside asset needs to be stored
        there. For more references as to what is happening here visit https://react-bootstrap.netlify.com/components/navbar */}
      <Navbar bg="red" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={require('./assets/logo.svg')}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' St. Cloud State Tuition '}
        </Navbar.Brand>
      </Navbar>
      {/*Creates the dropdown button allowing people to select the semester that they what to view*/}
      <Container>
        <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="change-semseter">
              Change Semester
            </Dropdown.Toggle>
          </Dropdown>
          </Col>
        </Row>
      </Container>
      {/*TODO: Grant please fix the col and the row */}
      <Container fluid>
      <Row>
      <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
             <Card.Body>
                <Card.Title>Make Payments</Card.Title>
                <Card.Text>
                  Grant Do this later need to fetch payment stuff
               </Card.Text>
               <Button variant="primary">Pay Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
             <Card.Body>
                <Card.Title>Payment History</Card.Title>
                <Card.Text>
                  Grant Do this later need to fetch payment stuff
               </Card.Text>
               <Button variant="primary">View Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
             <Card.Body>
                <Card.Title>Tuition Breakdown</Card.Title>
                <Card.Text>
                  Grant Do this later need to fetch Tuiton Stuff
               </Card.Text>
               <Button variant="primary">View Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>
      <CardDeck>
      <Card>
        <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
         <Card.Body>
            <Card.Title>View Scholarships</Card.Title>
            <Card.Text>
              Grant Do this later need to fetch Scholarship Stuff
           </Card.Text>
           <Button variant="primary">View Now</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
      <Card>
        <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
         <Card.Body>
            <Card.Title>Student Employment</Card.Title>
            <Card.Text>
              Grant Do this later need to fetch Student Employment
           </Card.Text>
           <Button variant="primary">View Now</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      </Row>
      </Container>
      </div>
      );
    }
}
export default App;