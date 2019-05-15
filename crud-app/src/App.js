import React from 'react';

import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
function App() {
  return (
    <section className="App">
    <h1>Add Course</h1>
    <CourseForm/>
    <CourseList/>
   
    </section>
  );
}

export default App;
