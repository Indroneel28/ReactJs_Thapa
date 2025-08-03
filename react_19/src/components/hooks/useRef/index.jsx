import { useRef } from "react";

const UseRef= () => {

    //Using Basic Javascript
    //const username= document.getElementById("username");
    //const password= document.getElementById("password");
    //This method is working but not recommended by React.js

    //Using useRef
    const username= useRef(null);
    const password= useRef(null)

    const handleFormSubmit= (event) => {
        event.preventDefault()
        console.log(username.current)
        console.log(password.current)
        console.log(username.current.value, password.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" ref={username} />
            <br />
            <input type="text" id="password" ref={password}/>
            <br />
            <button>Submit</button>
        </form>
    )
}
export default UseRef;