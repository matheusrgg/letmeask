import {BrowserRouter as Router,Routes,useRoutes, Route} from 'react-router-dom';


import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';


function App() {
  // return (

  //   <BrowserRouter>
  //     <Route path="/"  element={<Home />} />
  //     <Route path="/rooms/new" element={<NewRoom />} />
  //   </BrowserRouter>

  // );
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/rooms/new", element: <NewRoom /> },
    // ...
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
