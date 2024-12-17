import About from "./components/about/About"
import Client from "./components/clients/Client"
import Contact from "./components/contact/Contact"
import Introduction from "./components/introduction/Introduction"
import Navbar from "./components/navbar/navbar"
import Portfolio from "./components/portfolio/Portfolio"

const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <About />
      <Portfolio />
      <Client />
      <Contact />
    </div>
  )
}

export default App