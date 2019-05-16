import React, {Component,Fragment} from 'react';



class CourseList extends Component {

  renderCourses = () => {
    return (
      <li>
      <span>{this.props.details}</span>
      <button onClick={() => { this.props.delete(this.props.index)}}>Delete Courses</button>
    </li>
    )
  }
    render(){
  return (
    <Fragment>
     {this.renderCourses()}
    </Fragment>
  );
}
}

export default CourseList;
