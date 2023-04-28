import { useEffect, useState } from 'react'

import EmailModal from '../components/EmailModal'

const EmailAccounts = () => {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscapeKey)
    return () => {
      window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  const onClose = () => {
    const modal = document.querySelector('.modal')
    modal.classList.add('modal-closing')
    setTimeout(() => {
      setModalOpen(false)
      modal.classList.remove('modal-closing')
    }, 300)
  }
  return (
    <section className="text-gray-400body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Manage Your Email Accounts
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our app makes it easy to manage all your email accounts in one place. Add new email
            accounts quickly and easily, and access them all from our user-friendly dashboard. View
            your emails from each account individually or see all your emails in one place. Remove
            an account whenever you want, without any hassle. With our app, you can manage all your
            email accounts efficiently and save valuable time. Try our app today and experience
            hassle-free email management!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Gmail"
                role="img"
                viewBox="0 0 512 512"
                className="text-indigo-400 w-12 h-12 mb-3 inline-block"
              >
                <rect width="512" height="512" rx="15%" fill="#fff" />
                <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                <path fillOpacity=".05" d="M256 285L120 392l-4-212" />
                <path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" />
                <path fillOpacity=".08" d="M317 392h77V159H82" />
                <path fill="#f2f2f2" d="M97 121h318L256 234" />
                <path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z" />
                <path
                  fill="none"
                  stroke="#de5145"
                  strokeLinecap="round"
                  strokeWidth="44"
                  d="M97 143l159 115 159-115"
                />
              </svg>
              <p className="leading-relaxed">Email</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Gmail"
                role="img"
                viewBox="0 0 512 512"
                className="text-indigo-400 w-12 h-12 mb-3 inline-block"
              >
                <rect width="512" height="512" rx="15%" fill="#fff" />
                <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                <path fillOpacity=".05" d="M256 285L120 392l-4-212" />
                <path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" />
                <path fillOpacity=".08" d="M317 392h77V159H82" />
                <path fill="#f2f2f2" d="M97 121h318L256 234" />
                <path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z" />
                <path
                  fill="none"
                  stroke="#de5145"
                  strokeLinecap="round"
                  strokeWidth="44"
                  d="M97 143l159 115 159-115"
                />
              </svg>
              <p className="leading-relaxed">Email</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Gmail"
                role="img"
                viewBox="0 0 512 512"
                className="text-indigo-400 w-12 h-12 mb-3 inline-block"
              >
                <rect width="512" height="512" rx="15%" fill="#fff" />
                <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                <path fillOpacity=".05" d="M256 285L120 392l-4-212" />
                <path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" />
                <path fillOpacity=".08" d="M317 392h77V159H82" />
                <path fill="#f2f2f2" d="M97 121h318L256 234" />
                <path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z" />
                <path
                  fill="none"
                  stroke="#de5145"
                  strokeLinecap="round"
                  strokeWidth="44"
                  d="M97 143l159 115 159-115"
                />
              </svg>
              <p className="leading-relaxed">Email</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Gmail"
                role="img"
                viewBox="0 0 512 512"
                className="text-indigo-400 w-12 h-12 mb-3 inline-block"
              >
                <rect width="512" height="512" rx="15%" fill="#fff" />
                <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                <path fillOpacity=".05" d="M256 285L120 392l-4-212" />
                <path fill="#d54c3f" d="M120 392H97c-12 0-22-10-22-23V143h45z" />
                <path fillOpacity=".08" d="M317 392h77V159H82" />
                <path fill="#f2f2f2" d="M97 121h318L256 234" />
                <path fill="#b63524" d="M392 392h23c12 0 22-10 22-23V143h-45z" />
                <path
                  fill="none"
                  stroke="#de5145"
                  strokeLinecap="round"
                  strokeWidth="44"
                  d="M97 143l159 115 159-115"
                />
              </svg>
              <p className="leading-relaxed">Email</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add new account
        </button>

        {modalOpen && <EmailModal isOpen={setModalOpen} onClose={onClose} />}
      </div>
    </section>
  )
}

export default EmailAccounts
