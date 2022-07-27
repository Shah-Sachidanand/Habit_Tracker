import { connect } from 'react-redux';
import { updateStatus } from '../actions/Habits';
import {Row,Col,Table,Select} from 'antd'
import {openNotify} from '../helpers'



function Tracker(props) {
  const { Option } = Select;
  // display previous 6 dates and month
  var date = new Date();
  var dt = date.getDate();
  var mt = date.toLocaleString('default', { month: 'short' });

  const { habits } = props.state.habits;

  //to dispatch action to update status of particular day of that habit.
  const handleUpdateStatus = (value) => {
    console.log('value', value);
    var arr = value.split('-');

    props.dispatch(updateStatus(arr));
    openNotify(
      'success',
      'Status update',
      'You Successfully updated status of habit!!'
    );
  };

  const columns =[
    {
      title: 'Habit',
      dataIndex: 'habit',
      key:'habit'
    },
    {
      title: dt - 6 + ' ' + mt,
      dataIndex: 'dt_6',
      key: 'dt-6',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[6]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-6'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-6'}>Done</Option>
        <Option value={'None-' + habit.title + '-6'}>None</Option>
       </Select>
      </>
      ),
    },
    {
      title: dt - 5 + ' ' + mt,
      dataIndex: 'dt_5',
      key: 'dt-5',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[5]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-5'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-5'}>Done</Option>
        <Option value={'None-' + habit.title + '-5'}>None</Option>
      </Select>
      </>
      ),
    },
    {
      title: dt - 4 + ' ' + mt,
      dataIndex: 'dt_4',
      key: 'dt-4',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[4]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-4'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-4'}>Done</Option>
        <Option value={'None-' + habit.title + '-4'}>None</Option>
      </Select>
      </>
      ),
    },
    {
      title: dt - 3 + ' ' + mt,
      dataIndex: 'dt_3',
      key: 'dt-3',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[3]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-3'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-3'}>Done</Option>
        <Option value={'None-' + habit.title + '-3'}>None</Option>
      </Select>
      </>
      ),
    },
    {
      title: dt - 2 + ' ' + mt,
      dataIndex: 'dt_6',
      key: 'dt-2',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[2]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-2'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-2'}>Done</Option>
        <Option value={'None-' + habit.title + '-2'}>None</Option>
      </Select>
      </>
      ),
    },
    {
      title: dt - 1 + ' ' + mt,
      dataIndex: 'dt_1',
      key: 'dt-1',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[1]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-1'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-1'}>Done</Option>
        <Option value={'None-' + habit.title + '-1'}>None</Option>
      </Select>
      </>
      ),
    },
    {
      title: dt  + ' ' + mt,
      dataIndex: 'dt',
      key: 'dt',
      render: (habit) => (
        <>
        <Select style={{width:'120'}} defaultValue={habit.status[0]} onChange={handleUpdateStatus}>
        <Option value= {'Not Done-' + habit.title + '-0'}>Not Done</Option>
        <Option value={'Done-' + habit.title + '-0'}>Done</Option>
        <Option value={'None-' + habit.title + '-0'}>None</Option>
      </Select>
      </>
      ),
    },
  ];
    // to populate data in table...

  const data =[];
  habits.map((habit, index) => {
    data.push({
      key: index + 1,
      habit: `${habit.title}`,
      dt_6: habit,
      dt_5: habit,
      dt_4: habit,
      dt_3: habit,
      dt_2: habit,
      dt_1: habit,
      dt: habit,
    });
    return data;
  });
  return(
    <div  className='tracker-container'>
     <Row justify='space-around' align='middle'>
        <Col span={22}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  ) }

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(Tracker);
