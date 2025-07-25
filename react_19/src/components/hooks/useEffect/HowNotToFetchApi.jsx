import React, { useState } from 'react'
import "./Pokemon.css";

const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState([]);

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            // setApiData(data)
            //Memory udd ke firefox crash ho gaya
        })
        .catch((error) => console.log(error));

    //this is not good coz infinite loop
    //Solution:- useEffect will be used

    return (
        <div className='container effect-container'>
            <ul>
                data:
                {
                    apiData.map((currData) => {
                        return <li key={currData.id}>{currData.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default HowNotToFetchApi;