import './App.css'

import Home from "./pages/home";
import NavBar from "./components/navBar.tsx";
import About from "./pages/about.tsx";
import Expertise from "./pages/expertise.tsx";
import Contact from "./pages/contact.tsx";


function App() {


  return (
      <div>
          <NavBar/>
          <Home/>
          <About/>
          <Expertise/>
          <Contact/>
      </div>
  )
}

export default App

