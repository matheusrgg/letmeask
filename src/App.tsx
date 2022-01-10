import {BrowserRouter as Router,Routes,useRoutes, Route} from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

import {AuthContextProvider} from '../src/contexts/AuthContext'


function App() {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/rooms/new", element: <NewRoom /> },
  
  ]);
  return routes;
}

const AppWrapper = () => {   
    return (
      <Router>
       <AuthContextProvider>
          <App />
       </AuthContextProvider>
      </Router>
    );
  }



export default AppWrapper;
