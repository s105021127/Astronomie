import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Button , Form } from 'reactstrap';
//import { useHistory } from "react-router-dom";
import { Button , Form, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import ReactPlayer from 'react-player'; // for video players

/* Import bootstrap CSS*/
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import My CSS */
import '../styles/homePage.css';
import Background from './img/ADB2.png';

class HomePage extends Component {
//  history = useHistory();

  state = {
  };

  // This function is called when the component has been loaded
  async componentDidMount() {

  }

  async signUpClick() {
     console.log('Sign up');
  }

  async logInClick() {
     console.log('Log in');
  }

  async listProjectClick() {
     console.log('List projects');
  }

  render() {
    return (
      <body class="">

        {/* -- Navbar -- */}
        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#">Astronomie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/project-list">Ongoing project</Nav.Link>
                <Nav.Link href="#">Help</Nav.Link>
                <Nav.Link href="/log-in">Log in</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* -- Navbar -- */}

        <div class="p-5 text-left bg-image"
        style={
          {backgroundImage: `url(${Background})`, // 要用 " ` "，不能用 " ' "
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '694px' ////////做完最後記得刪掉
        }}>

          <div class="container">
            <br/>
            <h1 style={{color: '#FFFFFF', fontWeight: 'bold'}}>Welcome !</h1>
            <h1 style={{color: '#FFFFFF', fontWeight: 'bold' ,marginTop: '5px'}}>The Astronomies !</h1>
            
            {/*---- Search Box Here ----*/}
            <br/>
            
            {/* ----------------------- */}
            
            <br/>
            <h5 style={{color: '#FFFFFF', marginTop: '5px'}}>Astronomie = Astronomy + Homie !</h5>
            <h5 style={{color: '#FFFFFF', marginTop: '5px'}}>Take this website as your home</h5>
            <h5 style={{color: '#FFFFFF', marginTop: '5px'}}>for your astronomical project and equipments.</h5>

            <br/>
            <br/>
            <Button variant="dark" size="lg"> Become an Astronomie !</Button>{' '}

          </div>
          
        </div>
      </body>
    );
  }
}

export default HomePage;

/*import React, { Component } from 'react';
import {BrowserRouter as Route, Router ,Link ,Switch, Navlink} from 'react-router-dom';
import '../styles/homePage.css';
import background from './img/ADB2.png';
import {Jumbotron, Form, Container, Navbar, Nav} from 'reactstrap'; 
import {FormGroup, FormControl, ControlLabel,Button,DropdownButton, ButtonGroup, Dropdown} from 'react-bootstrap';
import ReactPlayer from 'react-player';

export default function homePage() {
    return (

      <div style={{ backgroundImage: `url(${background})` ,backgroundSize: 'cover'}}>
<Button variant="primary" >Astronomie</Button>
<ButtonGroup style={{float: 'right'}}>
  <Button>Onpoing Project</Button>
  <Button>Log in</Button>
  <Button>Sign up</Button>
</ButtonGroup>
<Form >
<Button variant="outline-success" style={{float: 'right'}}>Search</Button>
      <FormControl style={{float: 'right'}} size="lg" type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
<Jumbotron>
  <h1> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome!
<ReactPlayer style={{float: 'right'}}
    url="https://youtu.be/luai0p0y2zE"
    controls
    playbackRate = {2}
    width = "720px"
    height = "480px"
/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Astronomies!</h1>

  <h2 style={{color:'white'}} >
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astronomie = Astronomy + Homie !<br/><br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Take this website as your home <br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; for your astronomical project and equipments.
  </h2>
  <p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Button variant="secondary" size="lg">Become an Astronomie!<br/></Button> <br/><br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;->Getting chances to use your equipments efficiently!<br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;->Getting to join the projects you want!<br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;->Getting to store the data of your projects!
  </p>
</Jumbotron>
<br /><br />
      </div>
    );
  }*/

/*<h1>Home Page</h1>
          <Link to="/project-list">
              <Button onClick={this.listProjectClick}>Ongoing Projects</Button>
          </Link>
          <Link to="/log-in">
              <Button onClick={this.logInClick}>Log in</Button>
          </Link>
          <Link to="/signup">
              <Button onClick={this.signUpClick}>Sign up</Button>
          </Link>*/

