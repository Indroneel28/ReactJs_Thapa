import { useState } from "react";


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 26 },
    { name: "Angles", age: 28 },
];

//Method 1:- Using Map
/*
const DerivedState = () => {
  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {
                users.map((user)=> {
                    return(
                        <li key={user.name}>Name:- {user.name} || Age:- {user.age} </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
*/

//Method 2:- Using useState hook
/*
//My Method (Not very good solution)
const DerivedState = () => {

    const [index,setIndex]= useState(0)

    const handleClick= () => {
        setIndex(()=>index+1)
    }

  return (
    <div>
        <h1>Users List</h1>
        
        <ul>
            <li>{users[index].name} || {users[index].age}</li>
        </ul>

        <button onClick={handleClick}>Click</button>
    </div>
  )
}
  */

//Method 2:- Using useState hook
const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Charlie", age: 26 },
        { name: "Angles", age: 28 },
    ]);
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
        </div>
    )
}



export default DerivedState