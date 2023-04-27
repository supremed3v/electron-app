import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="grid grid-cols-4">
      <div className="bg-gray-800 h-screen rounded">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <div className="text-xl text-center justify-center items-center flex mt-20">Content</div>
      </div>
    </div>
  )
}

export default App
