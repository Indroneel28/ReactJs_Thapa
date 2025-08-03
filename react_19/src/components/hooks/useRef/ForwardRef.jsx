import { forwardRef, useRef, useId } from "react"

export const ForwardRefs = () => {

    const username = useRef(null);
    const password = useRef(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(username.current.value, password.current.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {/* <BeforeReact19Input label="username" ref={username}/>
            <BeforeReact19Input label="password" ref={password}/> */}
            <AfterReact19Input label="username" ref={username} />
            <AfterReact19Input label="password" ref={password} />
            <button>Submit</button>
        </form>
    )
}

//Old syntax
const BeforeReact19Input = forwardRef((props, ref) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref} />
        </div>
    );
});

//New syntax
const AfterReact19Input = (props) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={props.ref} />
        </div>
    );
}