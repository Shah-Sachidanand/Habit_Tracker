import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../CSS/habit.css'


function Habit(props) {

  const navigate = useNavigate();
  
  const { habits } = props.habits;
  const { handleDelete } = props;

  //Redirect to progress page
  const redirect = () => {
    navigate('/progress')
  };
  const style ={
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'baseline',
  width: '18rem', height:'10rem',
  marginTop:'30px',
  marginLeft:'30px'
}

  // Generate cards for all the habits added..
  return (
      <div id='container'>
        <Row>
          {habits && 
          habits.map((habit, index) => {
            return(
              <Card style={style}>
                <Card.Body>
                  <Card.Title>
                    {habit.title} -
                    <Button className='rbtn' variant="outline-danger" size="sm" onClick={(e) => handleDelete(habit)}>
                        Remove
                      </Button>
                  </Card.Title>
                  <Card.Text>
                    <span>Streak-</span>
                    {habit.streak}/7
                  </Card.Text>
                    <div align='middle'>
                      <Button  variant="info" onClick={redirect}>
                        Check Progress
                      </Button>
                    </div>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
        </div>
  )}

export default Habit;
