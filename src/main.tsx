import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BaseRouter from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BaseRouter />
  </StrictMode>,
)
