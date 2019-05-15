import React from 'react';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.add}>
            <input type="text" onChange={props.update}/>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default CourseForm;