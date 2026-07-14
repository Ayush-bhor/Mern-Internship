import {useState} from "react";
export default function Form(){
    let [name,setName]=useState("");
    let[user,setUser]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        setUser(name);
    }   
    function getsubmit(){
        alert("Form Submitted");
    }
    return<>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        {user && <p>Hello, {user}!</p>}
    </>
}