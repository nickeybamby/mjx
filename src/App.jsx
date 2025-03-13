import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'

function App() {

  return (
    <>
      <div className='App'>
        <div>
          <Navbar />
          <Header />
          <Services />
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
