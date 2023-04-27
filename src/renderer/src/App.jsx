import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Electron React Boilerplate</h1>
        <div>
          <a href="#">Saad Siddiqui</a>
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
