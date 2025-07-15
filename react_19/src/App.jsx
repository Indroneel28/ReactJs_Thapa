import React from 'react'
// import ReportCard from './components/NetflixSeries.jsx' //For default export
import { NetflixSeries } from './components/NetflixSeries.jsx' //For named export
// import "./components/Netflix.css"
import "./components/Netflix.module.css";
import Todo from './projects/Todo/Todo.jsx';

const App = () => {
  return (
    <section>
      {/* <h1 className='common-heading'>List of Best Netflix Series</h1>
      <NetflixSeries /> */}
      <Todo/>
    </section>
  )
}

export default App
