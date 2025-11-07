import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { OverallPlanProvider } from './contexts/OverallplanContext.tsx'
import "./i18n";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <OverallPlanProvider>
        <App />
      </OverallPlanProvider>
    </AuthProvider>
  </React.StrictMode>,
)
