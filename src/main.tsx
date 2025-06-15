import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.tsx'
import Detail from './pages/Detail.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  // errorElement: <NotFoundPage />,
  // children: [
  //   {
  //     path: '/details/:name',
  //     element: <Detail />
  //   }
  // ]
},
{
  path: '/details/',
  element: <Detail />,
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/details/:name',
      element: <Detail />
    }
  ]
},
{
  path: '*',
  element: "not found!!!"
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)