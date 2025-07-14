import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './App.css'
import App from './App.jsx'
// import Profile from './components/Profile.jsx'
// import State from './components/hooks/State.jsx'
// import DerivedState from './components/DerivedState.jsx'
// import {LiftStateUp} from './components/LiftStateUp.jsx'
// import ToggleSwitch from './projects/ToggleSwitch/ToggleSwitch.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Profile/> */}
    {/* <State/> */}
    {/* <DerivedState/> */}
    {/* <LiftStateUp/>*/}
    {/* <ToggleSwitch/> */}
  </StrictMode>,
)