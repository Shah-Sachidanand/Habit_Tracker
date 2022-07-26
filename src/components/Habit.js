import Button from "antd/lib/button";
import { Row } from "react-bootstrap";
import Statistic from "antd/lib/statistic";
import Col from "react-bootstrap/Col";
import Card from "antd/lib/card";
import {useNavigate} from 'react-router-dom';



function Habit(props) {

  const navigate = useNavigate();
  
  const { habits } = props.habits;
  const { handleDelete } = props;

  //Redirect to progress page
  const redirect = () => {
    navigate('/progress')
  };

  // generate cards for all the habits added..
  return (
    <div className='habit-container'>
      <div className='site-card-wrapper'>
        <Row>
          {habits &&
            habits.map((habit, index) => {
              return (
                <Col  style={{margin:'10px'}} key={index}>
                  <Card
                    title={habit.title}
                    bordered={false}
                    extra={
                      <Button danger onClick={(e) => handleDelete(habit)}>
                        Remove
                      </Button>
                    }
                    style={{ width: 300 }}
                    hoverable={true}
                  >
                    <Statistic
                      title='Streak'
                      value={habit.streak}
                      suffix='/ 7'
                    />
                    <div align='middle'>
                      <Button onClick={redirect} type='link'>
                        Check Progress
                      </Button>
                    </div>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

export default Habit;
