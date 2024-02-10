import { useDisclosure } from "@chakra-ui/react";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    type: "expense",
    description: "",
    amount: 0,
  });
  const [value, setValue] = useState("expense");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formData.description || !formData.amount) return;
    setAllTransactions([...allTransactions, { ...formData, id: Date.now() }]);
    setFormData({
      type: "expense",
      description: "",
      amount: 0,
    });
  }
  console.log(allTransactions);

  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
