import seriesData from '../api/seriesData.json';
import SeriesCard from './SeriesCard';
import "../index.css"

export const NetflixSeries = () => { //Named export
    const name = "Indroneel Goswami";
    const cgpa = 9.88;

    const skills = () => {
        const skills = "Java, DSA, Python, HTML, CSS, JavaScript";
        return skills
    }

    return (
        <ul className='grid grid-three-cols'>
            {
                seriesData.map((currElem) => {
                    return (
                        <SeriesCard key={currElem.id} currElem={currElem} />
                        //Here, key and currElem are the props.
                        //But key is a special prop which can't be accessed by the props in the child component.
                    )
                })
            }

        </ul>
    )
}

// export default NetflixSeries
// export const Footer = () => {
//     return (
//         <div>
//             <p>Footer</p>
//         </div>
//     )
// }

/*
In React, key is a special prop used internally by React to track elements in lists for efficient re-rendering.
The key prop is not accessible inside the child component via props.key.
If you want to use the same value inside the child component, you must explicitly pass it as a separate prop with a different name.
*/