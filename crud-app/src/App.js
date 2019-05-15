import React, {Component} from 'react';

import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';



class App extends Component{
  state = {
    courses: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "jQuery"}
    ]
  }
render() {
  const {courses} = this.state;
  const courseList = courses.map((course, index) =>{
    return <CourseList key={index} details={course.name} />
  })
  return (
  <section className="App">
  <h1>Add Course</h1>
  <CourseForm/>
  <ul>{courseList}</ul>
  
  </section>
);
}
}

export default App;
