import { Route, Routes } from 'react-router-dom'
import './App.css'
import Books from './pages/Books'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'



function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
