import { useState } from "react";

const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Charlie", age: 26 },
        { name: "Angles", age: 28 },
    ]);

    //Derived state: count of users
    let len= users.length
    console.log("Number of users is",len)

    //The variables which are depndent on the states are known as derived states.
    //Here, len and averageAge are dependent on "users" state.

    //Derived state: average age of users
    let averageAge= (users.reduce((accum, currElem) => accum + currElem.age, 0))/len;
    console.log("Average age is",averageAge)

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {
                    users.map((user) => {
                        return (
                            <li key={user.name}>Name:- {user.name} || Age:- {user.age} </li>
                        )
                    })
                }
            </ul>
            <p>Number of users is {len}</p>
            <p>Average age is {averageAge}</p>
        </div>
    )
}



export default DerivedState