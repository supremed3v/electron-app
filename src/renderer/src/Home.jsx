import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import HomeContent from './sections/HomeContent'
import EmailAccounts from './sections/EmailAccounts'
import Emails from './sections/Emails'
import Contacts from './sections/Contacts'

const Home = () => {
  return (
    <div className="grid grid-cols-5">
      <div
        style={{
          height: '100%'
        }}
        className="bg-gray-800 rounded"
      >
        <Sidebar />
      </div>
      <div className="col-span-4 px-4 py-4">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/home" element={<HomeContent />} />
          <Route path="/email-accounts" element={<EmailAccounts />} />
          <Route path="/emails" element={<Emails />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home
