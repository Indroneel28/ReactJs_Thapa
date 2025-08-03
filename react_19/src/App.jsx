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
import UseRef from './components/hooks/useRef/index.jsx';
import { ForwardRefs } from './components/hooks/useRef/ForwardRef.jsx';
import { UseId } from './components/hooks/useId/index.jsx';
import { ParentComponent } from './components/PropDrilling.jsx';
import { BioProvider } from './components/hooks/contextAPI/index.jsx';
import { Home } from './components/hooks/contextAPI/Home.jsx';
import { ThemeProvider } from 'styled-components';
import { DarkLight } from './components/hooks/contextAPI/DarkLight.jsx';

const App = () => {
  return (
    // <BioProvider>
    //   <Home />
    // </BioProvider>
    <ThemeProvider>
      <DarkLight/>
    </ThemeProvider>
  );
};

export default App
