export default function CourseDetail( {course} ){
    return (
        <div>
            <h4>Course Details</h4>
            <div>Name: {course.name}</div>
            <div>Credits: {course.credits}</div>
            <div>Taken by {course.enrolmentCount} students!</div> 
        </div>
    );

}