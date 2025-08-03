import { useId } from "react"

//METHOD 1:- Problem is violating DRY
//for each id we are making new useRef()

/*
export const UseId = () => {
    const usernameId = useId();
    const emailId = useId();
    const passwordId= useId();
    return (

        <form>
            {/* htmlFor in label and id in input should be same 
            <div>
                <label htmlFor={usernameId}>Username:</label>
                <input type="text" name="name" id={usernameId} />
            </div>
            <div>
                <label htmlFor={emailId}>Email:</label>
                <input type="email" name="email" id={emailId} />
            </div>
            <div>
                <label htmlFor={passwordId}>Password:</label>
                <input type="email" name="email" id={passwordId} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
*/

//METHOD 2:- 
export const UseId = () => {
    const id = useId();

    return (

        <form>
            {/* htmlFor in label and id in input should be same */}
            <div>
                <label htmlFor={id+"usernameId"}>Username:</label>
                <input type="text" name="name" id={id+"usernameId"} />
            </div>
            <div>
                <label htmlFor={id+"emailId"}>Email:</label>
                <input type="email" name="email" id={id+"emailId"} />
            </div>
            <div>
                <label htmlFor={id+"passwordId"}>Password:</label>
                <input type="email" name="email" id={id+"passwordId"} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}