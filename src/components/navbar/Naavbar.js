import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function Naavbar() {
  const renderTooltip = (props) => (

    <Tooltip id="button-tooltip" {...props} >
      Expense Chart
    </Tooltip>

  );
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" fixed-top" style={{ backgroundColor: "#1f1a38" }}>
        <Container>
          <Navbar.Brand href="/" to="/" className='fw-bold fs-3' style={{ color: "green" }}>Expense-Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/" className='fs-5 fw-normal'style={{color:"green"}}>Home</Nav.Link> */}
              {/* <Nav.Link as={Link} to="/about" className='fs-5 fw-normal ' style={{color:"green"}}>About</Nav.Link> */}
            </Nav>
            <Nav>
              {/* <Nav.Link as={Link} to="/about" className='fs-5 fw-normal text-white'>About</Nav.Link>/ */}
              {/* <Nav.Link as={Link} to="/about?type=dynamic" className='fs-5 fw-normal text-white'> Dynamic About</Nav.Link> */}

              <Nav.Link as={Link} to="/chart" className='fs-5 fw-normal ' style={{ color: "green" }}>
                <OverlayTrigger

                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <FontAwesomeIcon icon={faChartLine} />
                </OverlayTrigger>

              </Nav.Link>

              {/* <Nav.Link eventKey={2} href="#page">
             pages
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Naavbar;