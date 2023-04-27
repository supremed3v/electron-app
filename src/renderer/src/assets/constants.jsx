import { AiOutlineMail } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'
import { MdManageAccounts } from 'react-icons/md'
import { IoMdContacts } from 'react-icons/io'

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'home',
        icon: <FiShoppingBag />
      }
    ]
  },

  {
    title: 'Sections',
    links: [
      {
        name: 'email-accounts',
        icon: <MdManageAccounts />
      },
      {
        name: 'emails',
        icon: <AiOutlineMail />
      },
      {
        name: 'contacts',
        icon: <IoMdContacts />
      }
    ]
  }
]
