import React from 'react';

const CourseForm = (props) => {
    return (
        <form onSubmit={props.add}>
            <input type="text" onChange={props.update} value={props.current}/>
            <button type="submit">Add Course</button>
        </form>
    )
}

export default CourseForm;