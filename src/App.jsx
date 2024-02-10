import { Container } from "@chakra-ui/react";
import Main from "./components/Main";
import Summary from "./components/Summary";

function App() {
  return (
    <Container bg="gray.50" maxW="Container.3xl" h="100vh" p="10">
      <Main />
      <Summary />
    </Container>
  );
}

export default App;
