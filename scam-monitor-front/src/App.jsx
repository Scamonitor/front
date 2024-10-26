import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
