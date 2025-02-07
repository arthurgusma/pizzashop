import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './app';
import { enableMSW } from './api/mocks';

enableMSW().then(() => {
    createRoot(document.getElementById('root')!).render(<App />)
})
