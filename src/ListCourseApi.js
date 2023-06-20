import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Course from './Course';
import CourseDetail from './CourseDetail';

export default function ListCourseApi(){

    const [detailId, updateDetailId] = useState('');

    const [myCourseList, updateMyCourseList] = useState([])

    useEffect(()=> {
        console.log("Retrieve the courses");
        axios.get("http://localhost:4000/api/courses/all").then(
            response => {
                updateMyCourseList(response.data);
                console.log(response.data);
            }
        )
        .catch(e=>{console.log(e);})
        
    },[]);

    const ListCourseHtml = myCourseList.map((myCourse) => 
        <div key = {myCourse.id}>
            <Course myCourse = {myCourse} handleCourseClick = {handleCourseClick}/>
        </div>
    );

    function handleCourseClick(id){
        updateDetailId(id);
    }

    function getDetailCourseHtml(){
        const detailCourse = myCourseList.find(myCourse => myCourse.id ===detailId);

        if (detailCourse){
            return(
                <CourseDetail course={detailCourse} />
            )
        }
        else{
            return(<></>);
        }
    }

    return (
        <div>
            {ListCourseHtml}
            {getDetailCourseHtml()}
            <br/>
        </div>
    )




}