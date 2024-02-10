import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Summary() {
  return (
    <Flex bg="white" py="10">
      <Box w="50%">
        <Heading fontSize="1.5em" color="gray.500" textAlign="center" p="5">
          Balance is $100
        </Heading>
        <Flex
          bg="gray.50"
          alignItems="center"
          flexDirection="column"
          gap="5"
          padding="5"
        >
          <Box>
            <Heading>$100</Heading>
            <Text color="gray.600">Total Income</Text>
          </Box>
          <Box>
            <Heading>$100</Heading>
            <Text color="gray.600">Total Expense</Text>
          </Box>
        </Flex>
      </Box>
      <Box w="50%">
        <Heading>Chart</Heading>
      </Box>
    </Flex>
  );
}
