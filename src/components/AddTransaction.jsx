import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function AddTransaction() {
  const { isOpen, onClose } = useContext(GlobalContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Enter Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter Transaction description"
              name="description"
            />
          </FormControl>
          <FormControl mt="2">
            <FormLabel>Enter Amount</FormLabel>
            <Input
              type="number"
              placeholder="Enter Transaction amount"
              name="amount"
            />
          </FormControl>
          <RadioGroup colorScheme="green" mt="5">
            <Radio mr="5" name="type" value="income">
              Income
            </Radio>
            <Radio name="type" value="expense">
              Expense
            </Radio>
          </RadioGroup>
        </ModalBody>
        <ModalFooter>
          <Button mr="5" colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
