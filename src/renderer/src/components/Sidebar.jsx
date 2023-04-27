import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from '../../context/ContextProvider'
import { links } from '../assets/constants'

const Sidebar = () => {
  const [screenSize, setScreenSize] = useState(undefined)

  const { activeMenu, setActiveMenu } = useGlobalContext()
  const activeLink =
    'flex items-center gap-5 pl-4 pt-4 pb-2.5 rounded-lg text-blue-400 text-md m-2 pr-2'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-4 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-blue-400 m-2 pr-2 transition duration-300 ease-in-out'
  const handleCloseSideBar = () => {
    if (activeMenu) {
      setActiveMenu(true)
      console.log(activeMenu)
    }
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
            <div className="mt-10">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-5 uppercase">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      style={({ isActive }) => ({
                        backgroundColor: isActive && '#fff' // blue-600
                      })}
                    >
                      {link.icon}
                      <span className="capitalize">{link.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Logout button */}
      <div className="flex flex-col items-center justify-end mt-20">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
