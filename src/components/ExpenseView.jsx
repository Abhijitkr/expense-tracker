import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({ data, type }) {
  return (
    <Box bg="white" w="100%" mt="10" p="10" boxShadow="sm" h="fit-content">
      <Heading
        fontSize="1.7rem"
        color={type === "income" ? "green.400" : "red.400"}
      >
        {type === "income" ? "Income" : "Expense"}
      </Heading>
      {data.map((item) => (
        <Flex
          key={item.id}
          mt="5"
          p="5"
          rounded="md"
          bg={type === "income" ? "green.50" : "red.50"}
          justifyContent="space-between"
          fontSize="xl"
          boxShadow="md"
          border={"1px solid"}
          borderColor={type === "expense" ? "red.100" : "blue.100"}
        >
          <Text fontWeight="semibold">{item.description}</Text>
          <Text fontWeight="bold">${item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}
