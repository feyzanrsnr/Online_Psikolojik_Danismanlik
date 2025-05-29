import { createRoot } from 'react-dom/client'
import './scss/main.scss'
import { RouterProvider } from 'react-router'
import router from './routes/router'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
