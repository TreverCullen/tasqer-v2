import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Task from '../Task/Task';
import './task-list.css';

const TaskList = (props) => {
  return (
    <div className="task-list">
      <h1>{props.title}</h1>
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

TaskList.propTypes = {
  title: PropTypes.string.isRequired
};

export default TaskList;



// const mapDispatchToProps = dispatch => ({
//   fetchData: (fileReturnParameters, requestUrl) => {
//     dispatch(fileReturn(fileReturnParameters, requestUrl));
//   }
// });
// const mapStateToProps = state => ({ responseData: state.EFileReducers.responseData });

// export default connect(mapStateToProps, mapDispatchToProps)(ButtonToSendRequestToEFE);
