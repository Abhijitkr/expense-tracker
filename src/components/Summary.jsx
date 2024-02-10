import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AddTransaction from "./AddTransaction";
import ExpenseChart from "./ExpenseChart";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Summary() {
  const {
    allTransactions,
    totalExpense,
    totalIncome,
    setTotalExpense,
    setTotalIncome,
  } = useContext(GlobalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((transaction) => {
      if (transaction.type === "income") {
        income += parseFloat(transaction.amount);
      } else {
        expense += parseFloat(transaction.amount);
      }
    });

    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransactions]);

  return (
    <Flex bg="white" py="10">
      <Box w="50%">
        <Heading fontSize="1.5em" color="gray.500" textAlign="center" p="5">
          Balance is ${totalIncome - totalExpense}
        </Heading>
        <Flex
          bg="gray.50"
          alignItems="center"
          flexDirection="column"
          gap="5"
          padding="5"
        >
          <Box textAlign="center">
            <Heading>${totalIncome}</Heading>
            <Text color="gray.600">Total Income</Text>
          </Box>
          <Box textAlign="center">
            <Heading>${totalExpense}</Heading>
            <Text color="gray.600">Total Expense</Text>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" alignItems="center" w="50%">
        <ExpenseChart />
      </Flex>
      <AddTransaction />
    </Flex>
  );
}
