
import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>

      <Header />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
