import React, { useState } from 'react';
import { addHabit, deleteHabit } from '../actions/Habits';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Habit from './Habit';
import { openNotify } from '../helpers';
function Main(props) {
  //input the habit title
  const [title, setTitle] = useState('');
  const [val, setVal] = useState();


  const handleAddChange = (e) => {
    setTitle(e.target.value);
    
  };

  //to dispatch action to add habit
  const handleaddHabit = (e) => {
    // e.preventDefault();
    setVal('');
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
  const style ={
    margin:'30px',
    height:'10px',
    width:'400px',
    marginBottom:'100px'
  }

  // render input and add button along with display all cards habit added
  return (
    <div>
    <div justify='space-around' align='middle'>
    <Form style={style} onSubmit={handleaddHabit}>
      <Form.Group className="mb-3">
        <Form.Control type='text' value={val} required onChange={handleAddChange} placeholder='Add Habit Now!!'/>
      </Form.Group>
      <Button type='submit'>Add Habit</Button>
      </Form>
    </div>
   <Habit 
   habits={props.state.habits}
   notify={openNotify}
   handleDelete={handleDelete}
   history={props.history}
 />    
 </div>
  )
}
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Main);
