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
                <Navbar.Brand ><Link to="/" style={style}>Habit-Tracker</Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to="/progress" style={style}>Progress</Link></Nav.Link>
                    <Nav.Link><Link to="/" style={style}>+Add Habit</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbars;