import React, {Component} from 'react';

import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';



class App extends Component{

  state = {
    courses: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "jQuery"}
    ],
    current: ""
  }

// Update Course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }


// Add Course
  addCourse = (e) => {
    e.preventDefault()
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current})
    this.setState({
      courses: courses,
      current: ""
    })
  }
  // delete course 
  deleteCourse = (index) =>{
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses: courses
    })
  }

  // edit course
  editCourse = (index, value) =>{
    let courses = this.state.courses;
    let course = courses[index];
    console.log("course", course)
    console.log("coursesss", courses)

    course['name'] = value;
    this.setState({
      courses: courses
    })

  }

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course, index) =>{
      return <CourseList key={index} index={index} details={course} update={this.handleChange} delete={this.deleteCourse} editCourse={this.editCourse}/>
    })
    return (
      <section className="App">
        <h1>Add Course</h1>
          <CourseForm current={this.state.current} update={this.updateCourse} add={this.addCourse} />
        <ul>{courseList}</ul>
      </section>
  );
  }
}

export default App;
