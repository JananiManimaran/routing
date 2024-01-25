import { Route,Routes,Link } from "react-router-dom"
import HomePages from "./HomePages"
import ContactPage from "./ContactPage"
export default function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePages text='This is my HomePages'/>}/> 
      <Route path="/Contact" element={<ContactPage text='this is my Contactpage'/>}/>
      {/* <Route path="/About" element={<h1>welcome self tag</h1>}/> */}
      </Routes>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
       
    
    </>
  )
}

