import Sidebar from './components/Sidebar'
import { useGlobalContext } from '../context/ContextProvider'
import { Routes, Route } from 'react-router-dom'
import HomeContent from './components/HomeContent'

const Home = () => {
  const { activeMenu } = useGlobalContext()
  return (
    <div className="grid grid-cols-4">
      <div className="bg-gray-800 h-screen rounded">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/home" element={<HomeContent />} />
          <Route path="/about" element={<HomeContent />} />
          <Route path="/contact" element={<HomeContent />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
