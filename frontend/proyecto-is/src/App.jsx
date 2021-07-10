import { SessionProvider } from "./providers/Session.provider"
import Main from "./pages/Main"
import Layout from "./layout/Layout"
import Theme from "./themes/Theme"
function App() {
  return (
      <SessionProvider>
        <Theme>

        <Layout>
          <Main>


          </Main>


        </Layout>

        </Theme>

      </SessionProvider>

  );
}

export default App;
