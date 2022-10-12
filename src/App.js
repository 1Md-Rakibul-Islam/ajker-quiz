import { createBrowserRouter, RouterProvider, loader } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Layoyut/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Quiz from './Components/Quiz/Quiz';
import NotDataFound from './Components/4O4/NotDataFound';

function App() {
  // react router create
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {
            path: '/',
            loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
          },
          {
            path: '/home',
            loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
          },
          {
            path: '/quiz/:quizId',
            loader: async({params}) => {
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            element: <Quiz></Quiz>
          },
          {
            path: '/statistics',
            loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
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
        element: <NotDataFound></NotDataFound>
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
