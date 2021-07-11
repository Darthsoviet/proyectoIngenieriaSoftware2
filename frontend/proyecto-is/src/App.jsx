import { SessionProvider } from "./providers/Session.provider"
import { BrowserRouter, Switch } from "react-router-dom"
import { Route } from "react-router"

import Main from "./pages/Main"
import Layout from "./layout/Layout"
import Theme from "./themes/Theme"
function App() {
  return (
    <BrowserRouter>

      <SessionProvider>

        <Theme>


          <Layout>

            <Switch>

              <Route exact path="/">
                <Main />

              </Route>





            </Switch>

          </Layout>

        </Theme>


      </SessionProvider>
    </BrowserRouter>


  );
}

export default App;
