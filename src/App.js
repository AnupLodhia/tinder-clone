import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Profile from "./Profile";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
            {/* Chat Screen */}
            {/* Individual chat screen */}
            <ChatScreen />
          </Route>

          <Route path="/profile">
            <Header backButton="/" />
            {/* Profile section */}
            <Profile username="Sam" email="sam@gmail.com" />
          </Route>

          <Route path="/chats">
            {/* Main Chats section */}
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            {/* Home page */}
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
