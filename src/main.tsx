import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import BlogList from './pages/BlogList';
import Blog from './pages/Blog';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <BlogList />
      },
      {
        path: '/:id',
        element: <Blog />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <BlogList />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
