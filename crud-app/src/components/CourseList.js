import React, {Component} from 'react';



class CourseList extends Component {
    render(){
  return (
    <React.Fragment>
    <li>
      {this.props.details}
    </li>
    </React.Fragment>
  );
}
}

export default CourseList;
