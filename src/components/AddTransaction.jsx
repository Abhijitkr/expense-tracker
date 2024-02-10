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
  const { isOpen, onClose, formData, setFormData, handleFormSubmit } =
    useContext(GlobalContext);

  function handleOnChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleFormSubmit}>
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
                onChange={handleOnChange}
              />
            </FormControl>
            <FormControl mt="2">
              <FormLabel>Enter Amount</FormLabel>
              <Input
                type="number"
                placeholder="Enter Transaction amount"
                name="amount"
                onChange={handleOnChange}
              />
            </FormControl>
            <RadioGroup colorScheme="green" mt="5" defaultValue={formData.type}>
              <Radio
                mr="5"
                name="type"
                value="income"
                onChange={handleOnChange}
              >
                Income
              </Radio>
              <Radio name="type" value="expense" onChange={handleOnChange}>
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr="5" colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
