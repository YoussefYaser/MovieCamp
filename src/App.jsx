import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './router components/Layout/Layout'
import Home from './router components/Home/Home'
import NavBarContext from './Context/navBar context/NavBarContext'
import Movies from './router components/Movies/Movies'
import Series from './router components/Series/Series'
import Search from './router components/Search/Search'
import MovieDetails from './router components/MovieDetails/MovieDetails'
import SeriesDetails from './router components/SeriesDetails/SeriesDetails'
import Subscription from './router components/Subscription/Subscription'
import PersonDetails from './router components/PersonDetails/PersonDetails'


let baseImg = 'https://image.tmdb.org/t/p/w185/'

let routes = createHashRouter([
  {
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <Home baseImg={baseImg}></Home> }, 
      {path : '/movies', element : <Movies baseImg={baseImg}></Movies>},
      {path : '/TV-series', element : <Series baseImg={baseImg}></Series>},
      {path : '/search', element : <Search baseImg={baseImg}></Search>},
      {path : '/movie-details/:id', element : <MovieDetails baseImg={baseImg}></MovieDetails>},
      {path : '/series-details/:id', element : <SeriesDetails baseImg={baseImg}></SeriesDetails>},
      {path : '/person-details/:id', element : <PersonDetails baseImg={baseImg}></PersonDetails>},
      {path : '/subscription', element : <Subscription></Subscription>},
    ]
  }
])

function App() {

  return (
    <>
      <NavBarContext>
        <RouterProvider router={routes}></RouterProvider>
      </NavBarContext>
    </>
  )
}

export default App
