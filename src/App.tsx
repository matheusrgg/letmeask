import {BrowserRouter as Router,Routes,useRoutes, Route} from 'react-router-dom';

import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';

import {AuthContextProvider} from '../src/contexts/AuthContext'



function App() {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/rooms/new", element: <NewRoom /> },
    { path: "/rooms/:id", element: <Room /> },
    { path: "/admin/rooms/:id", element: <AdminRoom /> },
  
  ]);
  return routes;
}

const AppWrapper = () => {   
    return (
      <Router>
       <AuthContextProvider>
         {/* <Routes> */}
          <App />
         {/* </Routes> */}
       </AuthContextProvider>
      </Router>
    );
  }



export default AppWrapper;
