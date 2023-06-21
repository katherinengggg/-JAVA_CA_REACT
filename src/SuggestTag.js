import { useState, useRef } from "react";
import axios from 'axios';

export default function SuggestTag(){

    const [responseObj, updateResponseObj] = useState(null);
    const tagElement = useRef(null);

    function handleCreateClick(e) {
        e.preventDefault();
        console.log("Submitting data to server for tag creation!");
        console.log(tagElement.current.value);
        const data = {
            tagInfo: tagElement.current.value
        };
        axios
            .post("http://localhost:4000/api/tags", data)
            .then(response=>{
                updateResponseObj(response.data);
                console.log("Success!");
                console.log(response.data);
            })
            .catch(e=> {console.log(e);})

        
    }

    function showCreated(){
        if(responseObj) {
            //check response.data
            //could also checkhttp response?
                //if empty string or object, do not print
            return(
                <div>
                    <div>We've created a subject tag for your suggestion: {responseObj.tagInfo}</div>
                </div>
            )
        }
        else{
            return(<></>);
        }

    }

    return (
        <div>
            <h4>Suggest a Topic You'd Love to See Courses For:</h4>
            <form>
                <label htmlFor='tagInfo'>Topic Tag: </label>
                <input type='test' name='tagInfo' ref={tagElement}/><br /><br />
                <button onClick ={handleCreateClick}>Submit</button> <br /><br />
                {showCreated()}
            </form>
        </div>
    )
}