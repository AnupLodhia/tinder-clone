import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
import Chats from "./Chats"
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
              {/* Chats Screen */}
               {/* Individual chat screen */}
              <ChatScreen/>
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            {/* <SwipeButtons /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;