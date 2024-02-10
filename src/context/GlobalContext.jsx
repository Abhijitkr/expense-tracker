import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GlobalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </GlobalContext.Provider>
  );
}
