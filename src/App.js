import { Route,Redirect,Switch } from "react-router-dom";
import AllQuote from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./Pages/NotFound"

function App() {
  return (
    <Layout>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <AllQuote />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
