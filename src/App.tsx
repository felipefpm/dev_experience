import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthContextProvider } from './Contexts/AuthContext';
import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';
import { Room } from './Pages/Room';
import { RoomAdmin } from './Pages/RoomAdmin';



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={RoomAdmin} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
