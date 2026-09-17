import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root')
const app = (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)

const canHydrate = import.meta.env.PROD
    && root.dataset.prerenderPath === window.location.pathname
    && !window.location.search

if (canHydrate) {
    hydrateRoot(root, app)
} else {
    root.replaceChildren()
    createRoot(root).render(app)
}
