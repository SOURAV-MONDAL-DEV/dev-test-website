import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import QuizPage from './components/QuizPage/QuizPage';
import Statistics from './components/Statistics/Statistics';
import Main from './layouts/Main';




function App() {
  // seting Route
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz') ,
          element:<Home></Home>
        },
        {
          path:'/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz') ,
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizpage/:topicId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
          },
          element: <QuizPage ></QuizPage>,
          errorElement: <NotFound></NotFound>
        },
        {
          path:'*',
          element: <NotFound></NotFound>
        }
      ]
      
    },
    {
      path:'*',
      errorElement: <NotFound></NotFound>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
