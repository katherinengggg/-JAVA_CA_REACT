import { useRef } from "react";
import axios from 'axios';

export default function SuggestTag(){

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
                console.log("Success!");
                console.log(response.data);
            })
            .catch(e=> {console.log(e);})
    }
    return (
        <div>
            <h4>Suggest a Topic You'd Love to See Courses For:</h4>
            <form>
                <label htmlFor='tagInfo'>Topic Tag: </label>
                <input type='test' name='tagInfo' ref={tagElement}/><br /><br />
                <button onClick ={handleCreateClick}>Submit</button>
            </form>
        </div>
    )
}