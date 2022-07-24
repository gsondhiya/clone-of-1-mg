import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './Cart/Cart'
function Header1() {


  return (
    <>
    
    <Navbar bg="light" variant="red">
        <Container>
          <Navbar.Brand href="#home">
            <img src='https://www.1mg.com/images/tata_1mg_logo.svg' alt=""/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">LAB TESTS</Nav.Link>
            <Nav.Link href="#features">CONSULT DOCTORS</Nav.Link>
            <Nav.Link href="#pricing">COVID-19</Nav.Link>
            <Nav.Link href="#pricing">AYURVEDA</Nav.Link>
            <Nav.Link href="#pricing">CARE PLAN</Nav.Link>
          </Nav>
          <Nav>
            <Link to='./Cart/Cart'>Login||SignUP</Link>
       
            <Nav.Link href="#deets">Offers</Nav.Link>
            <Nav.Link href="#deets">Need Help ?</Nav.Link>
         
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Header1;
function Header2() {
  return (
    <>
    <Navbar bg="light" variant="red">
        <Container>
          <Navbar.Brand href="#home">
          <Nav.Link href="#deets">Location - DELHI</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
          <Form className="d-flex">
         <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">QUICK BUY! Get 25% off on medicines*</Nav.Link>
            <Button variant="warning">Quick Order</Button>{' '}
            
          </Nav>
        </Container>
      </Navbar>
    
    </>
  );
}
function Header3() {
  return (
    <>
   <Navbar>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Health Resource Center"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">All Diseases</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> All Medicines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Medicines and therapy</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Vitamin & Nutrition"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Multivitamins</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vitamins A-Z</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mineral Supplements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vitamin B12 & B complex</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Adult Daily Nutritions</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Diabetes"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Blood Glucose Monitors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Test Strips & Lancets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Syringes & Pens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diabetic Medicines</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Vitamins,Mineral & Antioxidants</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Health Care Devices"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Omron</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Accu -chek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dr.Morpen Device</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dr.Trust</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">One Touch</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Personal Care"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Sexcual Wellness</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Skin Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Baby Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sexual Wellness</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Elderly Care</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Health Conditions"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Stomach Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Heart Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bone, Joint& Muscle Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">pain Relief</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Eye Care</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cold & Cough</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Ayurveda Products"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Ayurveda Top Brands</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dabur</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sri sri Tattva</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jiva Ayurveda</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Patanjali</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Homeopathy"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Sbl homeoepahthy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dr Rectewge</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Willmar Schwabe India</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Adel Pekana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Bjain Homeopathy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Featured"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Monsoon Store</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Trending Now</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrival on Tata 1mg</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4">Deals of the Day</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      

    </Navbar>
    </>
  );
}

export {Header2,Header3}

