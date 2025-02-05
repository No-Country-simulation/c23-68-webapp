import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import PopupsProvider from '../src/components/modals/PopupsProvider.jsx'
import { MainModals } from '../src/components/modals/MainModals.jsx'


createRoot(document.getElementById('root')).render(
  <PopupsProvider>
    <App />
    <MainModals />
  </PopupsProvider>
)
