import React, { useState } from 'react'

const LoginForm = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target; //dereferencing
        setUser((prev) => ({ ...prev, [name]: value }))
        //[name] is a dynamic variable
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <h1>Login</h1>
                    <p>Please fill in this form to login.</p>

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>
                    <input type="text" name="email" placeholder='Enter your email' value={user.email} required onChange={handleInputChange} />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input type="text" name='password' placeholder='Enter your password' value={user.password} required onChange={handleInputChange} />
                    <p>
                        By login you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm