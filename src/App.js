import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Layoyut/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';

function App() {
  // react router create
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/home',
            element: <Home></Home>
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          }
        ]
      },
      
      {
        path: '*',
        element: <div>Page not Found</div>
      }
  ])


  return (
    <div className="App">
      {/* router provide */}
      <RouterProvider router={router}></RouterProvider>

      
    </div>
  );
}

export default App;
