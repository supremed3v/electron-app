import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/ContextProvider'

const Sidebar = () => {
  const [screenSize, setScreenSize] = useState(undefined)

  const { activeMenu, setActiveMenu } = useGlobalContext()
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  const handleCloseSideBar = () => {
    if (activeMenu) {
      setActiveMenu(true)
    }
  }

  const links = [
    {
      name: 'Home',
      id: 1,
      path: 'home'
    },
    {
      name: 'Emails',
      id: 2,
      path: 'about'
    },
    {
      name: 'Contacts',
      id: 3,
      path: 'contact'
    }
  ]

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
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.id}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item.name}</p>

                  <NavLink
                    to={`/${item.path}`}
                    key={item.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="capitalize">{item.name}</span>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
