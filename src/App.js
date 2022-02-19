import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <main>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes></AllQuotes>
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetail></QuoteDetail>
            </Route>
            <Route path="/new-quote">
              <NewQuote></NewQuote>
            </Route>
            <Route path='*'>
              <NotFound> </NotFound>
            </Route>
          </Switch>
        </Layout>
      </main>
    </div>
  );
}

export default App;
