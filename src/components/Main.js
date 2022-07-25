import React, { useState } from 'react';
import { Form, Input, Row, Col } from 'antd';
import { Button } from 'antd';
import { addHabit, deleteHabit } from '../actions/Habits';
import { connect } from 'react-redux';
import Habit from './Habit';
import { openNotify, layout, tailLayout } from '../helper';
function Main(props) {
  //input the habit title
  const [title, setTitle] = useState('');

  const handleAddChange = (e) => {
    setTitle(e.target.value);
  };

  //to dispatch action to add habit
  const handleaddHabit = () => {
    props.dispatch(
      addHabit({
        key: Math.round(Math.random() * 100),
        title: title,
        status: ['None', 'None', 'None', 'None', 'None', 'None', 'None'],
        streak: 0,
      })
    );

    setTitle('');
    openNotify(
      'success',
      'Habit Added',
      'You Successfully added habit. Now track your habit!!'
    );
  };

  //to dispatch action to delete habit
  const handleDelete = (habit) => {
    console.log('delete', habit);
    props.dispatch(deleteHabit(habit));

    openNotify('error', 'Habit Removed', 'You have Successfully deleted habit!!');
  };

  // render input and add button along with display all cards=habit added
  return (
    <Row justify='space-around' align='middle'>
      <Col span={12}>
        <div className='input-container'>
          <Form
            {...layout}
            name='basic'
            initialValues={{
              remember: true,
            }}
            onFinish={handleaddHabit}
          >
            <Form.Item
              name='habit'
              rules={[
                {
                  required: true,
                  message: 'Please input your Habit!',
                },
              ]}
            >
              <Input
                onChange={handleAddChange}
                allowClear
                placeholder='Add Now!!'
              />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit' size='large'>
                Add Habit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Habit
          habits={props.state.habits}
          notify={openNotify}
          handleDelete={handleDelete}
          history={props.history}
        />
      </Col>
    </Row>
  );
}
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Main);
