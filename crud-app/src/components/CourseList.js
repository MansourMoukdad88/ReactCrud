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
        <button onClick={()=> {this.toggleState()}} >Edit Course</button>
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

  updateCourseItem = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.editCourse(this.props.index, this.input.value)
    //! I stuck here for two hour, the reason is I type `this.props.value` instead of `this.input.value` !!! 
    this.toggleState()
  }
  // render update form 
  renderUpdateForm(){
    return (
      <form onSubmit={this.updateCourseItem}>
        <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name}/>
        <button>Update Course</button>
      </form>
    )
  }
  render(){
    let {isEdit} = this.state
    return (
      <Fragment>
        
      { isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList;
