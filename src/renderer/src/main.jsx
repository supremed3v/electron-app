import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { ContextProvider } from '../context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
