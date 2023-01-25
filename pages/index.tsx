import { Box, Flex, VStack } from "@chakra-ui/react";
import { AuthForm } from "../components/Forms/AuthForm";

export default function Login() {
  const handleInputChange = () => {};
  return (
    <Flex
      width="full"
      align="center"
      justifyContent="center"
      bg="gray.100"
      height="100vh"
    >
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <AuthForm
            formType="login"
            handleInputChange={() => {}}
            handleOnClick={() => {}}
            isLoading={false}
            errors={{}}
            forms={{}}
          />
        </VStack>
      </Box>
    </Flex>
  );
}

