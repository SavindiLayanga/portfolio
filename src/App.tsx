import './App.css'

import Home from "./pages/home";
import NavBar from "./components/navBar.tsx";
import About from "./pages/about.tsx";
import Skills from "./pages/skills.tsx";
import Expertise from "./pages/expertise.tsx";
import Contact from "./pages/contact.tsx";



function App() {


  return (
      <div>
          <NavBar/>
          <Home/>
          <About/>
          <Skills/>
          <Expertise/>
          <Contact/>
      </div>
  )
}

export default App

