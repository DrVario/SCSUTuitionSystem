import React, {
  Component
} from 'react';

import { Navbar, Button, CardDeck, Card, Container, Col, Modal, Form, Row, Tab, ListGroup, Table} from 'react-bootstrap';
import { PieChart, Pie, Tooltip, } from 'recharts';

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
    SemesterShow: false,
  };

  async componentDidMount() {
    const response = await fetch(`/api/getData`);
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
    let SemesterClose = () => this.setState({ SemesterShow: false });
    const data01 = [
      { name: 'Undergraduate Tuition', value: 3547.25 },{ name: 'Husky Anytime Meal Plan', value: 1422.00}, 
      { name: 'Renovated Single Room', value: 3580 },
    ];
    const data02 = [
      { name: 'Activity Fee', value: 117.36 }, { name: 'MSUSA', value: 7.52 },
      { name: 'Technology Fee', value: 153.92 }, { name: 'Athletics Fee', value: 54.96 },
      { name: 'Student Union', value: 120.60 },{ name: 'Health Services', value: 65 }, 
      { name: 'Facilities Assessment', value: 57.60 }, { name: 'Husky Bucks', value: 200 },
      { name: 'Bookstore Charges', value: 193.25 }, { name: 'Parking Pass', value: 189.00 },
    ];


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
        <Navbar.Text className="navbar-right">
      Signed in as: <a href="#login">Grant Porter</a>
    </Navbar.Text>
      </Navbar>
      {/*Creates the dropdown button allowing people to select the semester that they what to view*/}
        <br></br>
      {/*TODO: Grant please fix the col and the row */}
      <Container >
      {/*Payment Section */}
      <CardDeck>
          <Card>
            <Card.Img variant="top"src={require('./assets/group.png')} style={{ width: 'auto', height: '160px' }} />
             <Card.Body>
                <Card.Title>Make Payments</Card.Title>
                <Card.Text>
                  Pay the amount due for the current semester.
               </Card.Text>
               <Button variant="danger" onClick={() => this.setState({ PayShow: true })}>Pay Now</Button>
              </Card.Body>
            </Card>
          

          <Modal
            size="lg"
            show={this.state.PayShow}
            onHide={PayClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Bill Amount : $9,708.46
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
          
          <Card>
            <Card.Img variant="top"src={require('./assets/river.png')} style={{ width: 'auto', height: '160px' }} />
             <Card.Body>
                <Card.Title>Payment History</Card.Title>
                <Card.Text>
                  View the payment histroy of your account.
               </Card.Text>
               <Button variant="danger" onClick={() => this.setState({ HistoryShow: true })}>View Now</Button>
              </Card.Body>
            </Card>
            <Modal
            size="lg"
            show={this.state.HistoryShow}
            onHide={HistoryClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Payment History
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                St Cloud State University |	2019 Spring |	$0.00	
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                St Cloud State University |	2018 Fall |	$0.00	
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                St Cloud State University |	2018 Spring |	$0.00	
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                St Cloud State University |	2017 Fall |	$9,708.46	
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                St Cloud State University |	2017 Spring |	$0.00
                </ListGroup.Item>
              </ListGroup>
            </Col>
            </Row>
            </Tab.Container>
            </Modal.Body>
            </Modal>
         

        {/*Tuition Section */}
        
          <Card>
            <Card.Img variant="top"src={require('./assets/bridge.png')} style={{ width: 'auto', height: '160px' }} />
             <Card.Body>
                <Card.Title>Tuition Breakdown</Card.Title>
                <Card.Text>
                  idk man
               </Card.Text>
               <Button variant="danger" onClick={() => this.setState({ TuitionShow: true })}>View Now</Button>
              </Card.Body>
            </Card>
            <Modal
            size="lg"
            show={this.state.TuitionShow}
            onHide={TuitionClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Tuition Breakdown
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Container>
            <Row>
          <PieChart width={350} height={350}>
          <Pie dataKey="value"  data={data01} cx={200} cy={200} outerRadius={80} fill="#CD1041" label />
          <Tooltip />
          </PieChart>
          <PieChart width={350} height={350}>
          <Pie dataKey="value"  data={data02} cx={200} cy={200} outerRadius={80} fill="#000000" label />
          <Tooltip />
          </PieChart>
          </Row>
          <br></br>
        <ul>
         <li>Activity Fee : $117.63</li>
         <li>MSUSA : $7.52</li>
         <li>Husky Bucks : $200.00</li>
         <li>Technology Fee : $153.92</li>
         <li>Athletics Fee : $54.92</li>
         <li>Facilties Assesment : $57.60</li>
         <li>Student Union : $120.60</li>
         <li>Health Services : $65.00</li>
         <li>Bookstore Charges : $193.25</li>
         <li>Parking Lot Pass : $189.00</li>
         <li>Renovated Single Room : $3,580.00</li>
         <li>Husky Anytime Meal Plan : $1422.00</li>
         <li>Undergraduate Tuition : $3,547.25</li>
      </ul>
      <b>Total : $9,708.46</b>
          </Container>
            </Modal.Body>
            </Modal>
          </CardDeck>

          </Container>
          <br></br>
        {/*Scholarship Section */}
        <Container>

      <CardDeck>
      <Card>
        <Card.Img variant="top"src={require('./assets/bed.png')} style={{ width: 'auto', height: '160px' }} />
         <Card.Body>
            <Card.Title>View Scholarships</Card.Title>
            <Card.Text>
              View current scholarships.
           </Card.Text>
           <Button variant="danger" onClick={() => this.setState({ ScholarshipShow: true })}>View Now</Button>
          </Card.Body>
        </Card>
        
        <Modal
            size="lg"
            show={this.state.ScholarshipShow}
            onHide={ScholarshipClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              View Scholarships
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ListGroup variant="flush">
          <ListGroup.Item>Residential Life Scholarship : $500.00</ListGroup.Item>
          <ListGroup.Item>Scholarships From The American Society Of Naval Engineers : $1,000.00</ListGroup.Item>
          <ListGroup.Item>Robert Half Technology/AITP Scholarship : $2,500</ListGroup.Item>
          <ListGroup.Item>Betty Stevens-Frecknall Scholarship : $500.00</ListGroup.Item>
        </ListGroup>
          </Modal.Body>
        </Modal>
      

        {/*Employment Section */}
      
      <Card>
        <Card.Img variant="top"src={require('./assets/hockey.png')} style={{ width: 'auto', height: '160px' }} />
         <Card.Body>
            <Card.Title>Student Employment</Card.Title>
            <Card.Text>
              View and edit student employment.
           </Card.Text>
           <Button variant="danger" onClick={() => this.setState({ EmploymentShow: true })}>View Now</Button>
          </Card.Body>
        </Card>

        <Modal
            size="lg"
            show={this.state.EmploymentShow}
            onHide={EmploymentClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Student Employment
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Routing #
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Routing Number" />
              </Col>
            </Form.Group>
            </Form>
            <hr></hr>
            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Pay Period</th>
                      <th>Hours Worked</th>
                      <th>Amount Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>March 1st - 11th</td>
                      <td>40</td>
                      <td>$440</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>March 12th - 26th</td>
                      <td>36</td>
                      <td>$396</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>March 26th - April 10th</td>
                      <td>46</td>
                      <td>$506</td>
                    </tr>
                  </tbody>
                </Table>
            </Modal.Body>
            </Modal>

        <Card>
        <Card.Img variant="top"src={require('./assets/iself.png')} style={{ width: 'auto', height: '160px' }} />
         <Card.Body>
            <Card.Title>Change Semester</Card.Title>
            <Card.Text>
              Select the semseter you wish to view.
           </Card.Text>
           <Button variant="danger" onClick={() => this.setState({ SemesterShow: true })}>Change</Button>
          </Card.Body>
        </Card>

        <Modal
            size="lg"
            show={this.state.SemesterShow}
            onHide={SemesterClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Choose Semester
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item action href="#link1">
                St Cloud State University |	2019 Spring
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                St Cloud State University |	2018 Fall
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                St Cloud State University |	2018 Spring
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                St Cloud State University |	2017 Fall	
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                St Cloud State University |	2017 Spring
                </ListGroup.Item>
              </ListGroup>
            </Col>
            </Row>
            </Tab.Container>
            </Modal.Body>
            </Modal>

      </CardDeck>
        </Container>
      
      </div>
      );
    }
}
export default App;