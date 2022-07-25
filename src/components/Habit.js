import { Row, Col, Card, Statistic, Button } from 'antd';

function Habit(props) {

  
  const { habits } = props.habits;
  const { handleDelete } = props;

  //redirect to progress page
  const redirect = () => {
    props.history.push('/progress');
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
