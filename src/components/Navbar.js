import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navbars(){
    const style = {
        textDecoration: 'none',
        color: 'mistyrose',
        margin: '10px'
    }
    return(
        <Navbar bg="dark" variant="light">
      <Container>
          <Nav className="me-auto">
            <Nav.Link style={style}>
                Habit-Tracker
            </Nav.Link>
            <Nav.Link style={style}>
                Progress
            </Nav.Link>
            <Nav.Link style={style}>
                +Add Habit
            </Nav.Link>
          </Nav>
      </Container>
        </Navbar>
    )
}

export default Navbars;