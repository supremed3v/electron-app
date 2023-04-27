import { useState } from 'react'

const Sidebar = () => {
  const [active, setActive] = useState(1)
  const links = [
    {
      name: 'Home',
      id: 1,
      path: '/'
    },
    {
      name: 'Emails',
      id: 2,
      path: '/about'
    },
    {
      name: 'Contacts',
      id: 3,
      path: '/contact'
    }
  ]

  const handleButton = (id) => {
    setActive(id)
  }
  return (
    <div>
      {/* User Details Area */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-white">User Name</div>
        </div>
      </div>

      {/* Sidebar Links */}

      <div className="mt-8">
        <div className="flex items-left justify-left px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-2 items-center justify-center flex-col text-hex-9feaf9">
              {links.map((link) => (
                <button
                  key={link.id}
                  className={
                    active === link.id
                      ? 'flex items-center justify-center  rounded-full mt-10 bg-gray-600 px-4 py-2'
                      : 'flex items-center justify-center  rounded-full mt-10 bg-gray-800 px-4 py-2'
                  }
                  onClick={() => handleButton(link.id)}
                >
                  <div className="text-white">{link.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
