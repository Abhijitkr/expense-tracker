import { Button, Flex, Heading } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Heading color={"green.500"}>Expense Tracker</Heading>
      <Button colorScheme="green">Add Transaction</Button>
    </Flex>
  );
}
