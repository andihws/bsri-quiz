import { Route, Switch } from "wouter";
import Header from "./components/header";
import './styles/index.css';
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <> 
      <Header/>
      <Switch>
          <Route path="/"><Quiz /></Route>
        {/* Shows a 404 error if the path doesn't match anything */}
        {
          <Route>
            <p className="p-4">404: Page Not Found</p>
          </Route>
        }
      </Switch>
    </>
  );
};

export default App;
