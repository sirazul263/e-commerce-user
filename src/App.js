import "./styles/styles.scss";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/:slug">
          <ProductList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
