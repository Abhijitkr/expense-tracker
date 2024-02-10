import { Button, Flex, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const { onOpen } = useContext(GlobalContext);
  return (
    <Flex alignItems="center" justifyContent="space-between" mb="10">
      <Heading color={"green.500"}>Expense Tracker</Heading>
      <Button onClick={onOpen} colorScheme="green">
        Add Transaction
      </Button>
    </Flex>
  );
}
