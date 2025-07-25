import React, { useState } from 'react'

const ContactForm = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     const obj = { name, email, message };
    //     console.log(obj);
    // }

    //USING ONLY ONE USE STATE HOOK
    const [user,setUser]= useState({
        username:"",
        email:"",
        message:"",
    });

    const handleUser= (event)=> {
        const {name,value}= event.target;
        setUser((prev)=>({...prev,[name]:value}));
        //[name] is the dynamic variable
    }

    const handleFormSubmit= (event)=> {
        event.preventDefault();
        console.log(user);
    }

    return (
        <div className="container">
            <div className="card">
                <h1>Contact Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        autoComplete="off"
                        // value={name}
                        // onChange={(event) => setName(event.target.value)}
                        value={user.username}
                        onChange={handleUser}
                    />

                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        // value={email}
                        // onChange={(event) => setEmail(event.target.value)}
                        value={user.email}
                        onChange={handleUser}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        required
                        autoComplete="off"
                        rows="6"
                        // value={message}
                        // onChange={(event) => setMessage(event.target.value)}
                        value={user.message}
                        onChange={handleUser}
                    ></textarea>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;