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
    console.log(e.target.value);
  }


// Add Course
  addCourse = (e) => {
    e.preventDefault()
    console.log("Course Added")
  }

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course, index) =>{
      return <CourseList key={index} details={course.name} />
    })
    return (
      <section className="App">
        <h1>Add Course</h1>
          <CourseForm update={this.updateCourse} add={this.addCourse}/>
        <ul>{courseList}</ul>
      </section>
  );
  }
}

export default App;
