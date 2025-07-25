import React from 'react'
// import ReportCard from './components/NetflixSeries.jsx' //For default export
import { NetflixSeries } from './components/NetflixSeries.jsx' //For named export
// import "./components/Netflix.css"
import "./components/Netflix.module.css";
import Todo from './projects/Todo/Todo.jsx';
import Challenge from './components/hooks/useState/Challenge.jsx';
// import Registration from './projects/Registration_Form/Registration.jsx';
// import Registration from './projects/Registration_Form/Registration_Profesional.jsx';
import Registration_Profesional from './projects/Registration_Form/Registration_Profesional.jsx';
import LoginForm from './projects/Registration_Form/LoginForm.jsx';
import ContactForm from './projects/Registration_Form/ContactForm.jsx';
import ReactUseEffect, { ReactUseEffectDate } from './components/hooks/useEffect/index.jsx';
import UseEffectChallenge from './components/hooks/useEffect/useEffectChallenge.jsx';
import { CleanUp } from './components/hooks/useEffect/CleanUp.jsx';
import HowNotToFetchApi from './components/hooks/useEffect/HowNotToFetchApi.jsx';
import HowToFetchApi from './components/hooks/useEffect/HowToFetchApi.jsx';

const App = () => {
  return (
    <section>
      {/* <h1 className='common-heading'>List of Best Netflix Series</h1>
      <NetflixSeries /> */}
      {/* <Todo/> */}
      {/* <Challenge/> */}
      {/* <Registration/> */}
      {/* <Registration_Profesional/> */}
      {/* <LoginForm/> */}
      {/* <ContactForm/> */}
      {/* <ReactUseEffect/>
      <ReactUseEffectDate/> */}
      {/* <UseEffectChallenge/> */}
      {/* <CleanUp/> */}
      {/* <HowNotToFetchApi/> */}
      <HowToFetchApi/>
    </section>
  )
}

export default App
