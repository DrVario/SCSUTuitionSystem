import React, {
  Component
} from 'react';

import { Navbar, Button, CardDeck, Card, Container, Row, Dropdown, Col, Modal, Form, FormControl} from 'react-bootstrap';

{/*TODO List:
    - Find pictures for the cards
    - Layout the cards in a more organized way
    - Create Modal popover
    - Create Modal for each tab
    - import some form of graphing system 
    - Add forms to the pay tab
  */}

class App extends Component {
  handleShow = this.handleShow.bind(this);
  handleClose = this.handleClose.bind(this);
  state = {
    loading: true,
    Infromation: null,
    PayShow: false,
    HistoryShow: false,
    TuitionShow: false,
    ScholarshipShow: false,
    EmploymentShow: false,
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

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    let PayClose = () => this.setState({ PayShow: false });
    let HistoryClose = () => this.setState({ HistoryShow: false });
    let TuitionClose = () => this.setState({ TuitionShow: false });
    let ScholarshipClose = () => this.setState({ ScholarshipShow: false }); 
    let EmploymentClose = () => this.setState({ EmploymentShow: false });
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
      <br></br>
      {/*TODO: Grant please fix the col and the row */}
      <Container fluid>
      <Row>
      {/*Payment Section */}
      <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
             <Card.Body>
                <Card.Title>Make Payments</Card.Title>
                <Card.Text>
                  Grant Do this later need to fetch payment stuff
               </Card.Text>
               <Button variant="primary" onClick={() => this.setState({ PayShow: true })}>Pay Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>

          <Modal
            size="lg"
            show={this.state.PayShow}
            onHide={PayClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Pay Bill
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form>
              <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="cardNumber" placeholder="Enter Card Number"/>
              </Form.Group>

              <Form.Row>

              <Form.Group as={Col} controlId="formCardExpire">
              <Form.Label>Experation Date</Form.Label>
              <Form.Control type="cardExperation" placeholder="MM/YY"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formCardSecurity">
              <Form.Label>Security Code</Form.Label>
              <Form.Control type="cardSecurity" placeholder="000"/>
              </Form.Group>

              </Form.Row>

              <Form.Group controlId="formHolderFullName">
              <Form.Label>Card Holder Name</Form.Label>
              <Form.Control type="cardHolderName" placeholder="Full Name"/>
              </Form.Group>

              <Form.Group controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address"/>
              </Form.Group>

              <Form.Group controlId="formAdressOne">
              <Form.Label>Primary Address</Form.Label>
              <Form.Control type="addressOne" placeholder="1234 Main St"/>
              </Form.Group>

              <Form.Group controlId="formAdressTwo">
              <Form.Label>Secondary Address</Form.Label>
              <Form.Control type="addressTwo" placeholder="Apartment, Studio, Floor"/>
              </Form.Group>

              <Form.Row>

              <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="city"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control type="state"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="Zip"/>
              </Form.Group>

             </Form.Row>

            </Form>

            <Button variant="primary" type="submit">
           Submit
            </Button>

          </Modal.Body>
        </Modal>

        {/*Payment History Section */}
          <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
             <Card.Body>
                <Card.Title>Payment History</Card.Title>
                <Card.Text>
                  Grant Do this later need to fetch payment stuff
               </Card.Text>
               <Button variant="primary" onClick={() => this.setState({ HistoryShow: true })}>View Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>

        {/*Tuition Section */}
        <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
             <Card.Body>
                <Card.Title>Tuition Breakdown</Card.Title>
                <Card.Text>
                  Grant Do this later need to fetch Tuiton Stuff
               </Card.Text>
               <Button variant="primary" onClick={() => this.setState({ TuitionShow: true })}>View Now</Button>
              </Card.Body>
            </Card>
          </CardDeck>

        {/*Scholarship Section */}
      <CardDeck>
      <Card>
        <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
         <Card.Body>
            <Card.Title>View Scholarships</Card.Title>
            <Card.Text>
              Grant Do this later need to fetch Scholarship Stuff
           </Card.Text>
           <Button variant="primary" onClick={() => this.setState({ ScholarshipShow: true })}>View Now</Button>
          </Card.Body>
        </Card>
      </CardDeck>

        {/*Employment Section */}
      <CardDeck>
      <Card>
        <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: '366px', height: '160px' }} />
         <Card.Body>
            <Card.Title>Student Employment</Card.Title>
            <Card.Text>
              Grant Do this later need to fetch Student Employment
           </Card.Text>
           <Button variant="primary" onClick={() => this.setState({ EmploymentShow: true })}>View Now</Button>
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