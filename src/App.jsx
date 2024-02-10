import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import ExpenseView from "./components/ExpenseView";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { allTransactions } = useContext(GlobalContext);

  return (
    <Container bg="gray.50" maxW="Container.3xl" minH="100vh" h="100%" p="10">
      <Navbar />
      <Summary />
      <Flex justifyContent="space-evenly" gap={5}>
        <ExpenseView
          data={allTransactions.filter(
            (transaction) => transaction.type === "income"
          )}
          type="income"
        />
        <ExpenseView
          data={allTransactions.filter(
            (transaction) => transaction.type === "expense"
          )}
          type="expense"
        />
      </Flex>
    </Container>
  );
}

export default App;
