import React, {
  Component
} from 'react';

import { Navbar, Jumbotron, Button } from 'react-bootstrap';



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
      </div>
      );
    }
}
export default App;