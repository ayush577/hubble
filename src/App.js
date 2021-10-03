//* Packages
import { ThemeProvider } from "styled-components";

//* Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Hero,
  Statistics,
  GrowTogether,
  FlowConversations,
  YourUsers,
  BuildCommunities,
} from "./components/sections";

//* Style
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Hero />
        <Statistics />
        <GrowTogether />
        <FlowConversations />
        <YourUsers />
        <BuildCommunities />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
