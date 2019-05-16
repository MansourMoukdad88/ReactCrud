import React, {Component,Fragment} from 'react';



class CourseList extends Component {

  state = {
    isEdit: false
  }

  // render course item
  renderCourse = () => {
    return (
      <li>
      <span>{this.props.details.name}</span>
      <button onClick={()=> {this.toggleState()}}>Edit Course</button>
      <button onClick={() => { this.props.delete(this.props.index)}}>Delete Courses</button>
    </li>
    )
  }

  // toggleState
  toggleState = () =>{
    let {isEdit} = this.state
    this.setState({
      isEdit: !isEdit
    })
  }

  // render update form 
  renderUpdateCourse(){
    return (
      <form>
        <input type="text" defaultValue={this.props.details.name}/>
        <button>Update Course</button>
      </form>
    )
  }
  render(){
    let {isEdit} = this.state
    return (
      <Fragment>
        
      { isEdit ? this.renderUpdateCourse() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList;
