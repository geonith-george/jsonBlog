import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className='flex flex-col items-start justify-center content-center mx-5 mb-2'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App