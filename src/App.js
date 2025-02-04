import AboutCourses from "./Aboutcourses"
import Hero from "./Hero"
import Logobelt from "./Logobelt"
import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Popularcourses from "./Popularcourses"
import Teacheradvert from "./Teacheradvert"
import Testimonial from "./Testimonial"
import Contact from "./Contact"
import Footer from "./Footer"


export default function App(){
 
  return (
    <Router>
      <div className="App">
        <Navbar/> 
        <Hero/>
        <Logobelt/>
        <AboutCourses/>
        <Popularcourses/>
        <Teacheradvert/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
   </Router>
  ) 
}


