// import { VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
// import { useState } from "react";
// import { CustomForm } from "./Forms/CustomForm";
// import { EmailIcon, LockIcon } from "@chakra-ui/icons";
// import isEmailValid from "../utils/isEmailValid";
// import isPasswordValid from "../utils/isPasswordValid";

// export default function Login() {
  import { VStack, Box, Flex, Heading, Button } from "@chakra-ui/react";
// import { useState } from "react";
// import { CustomForm } from "./Forms/CustomForm";
// import { EmailIcon, LockIcon } from "@chakra-ui/icons";
// import isEmailValid from "../utils/isEmailValid";
// import isPasswordValid from "../utils/isPasswordValid";

// export default function Login() {
  
//   const [forms, setForms] = useState({
//     email: "",
//     password: "",
//   });
  
//   const [errors, setErrors] = useState({
//     email: false,
//     password: false,
//   });
  
//   const [isLoading, setIsLoading] = useState(false);
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setForms({ ...forms, [name]: value });
//   }

//   const handleOnClick = () => {
//     const { email, password } = forms;
//     setIsLoading(true);
//     setTimeout(() => {
//     const emailValid = isEmailValid(email);
//     const passwordValid = isPasswordValid(password);
//     setErrors({
//       email: !emailValid,
//       password: !passwordValid,
//     });
//     setIsLoading(false);
//     }, 1000);

//     console.log(forms);
//   }

//   return (
//     <VStack>
//       <Box>
//         <Heading>Login</Heading>
//       </Box>
//       <Flex>
//         <CustomForm
//           label="Email"
//           id="email"
//           name="email"
//           type="email"
//           value={forms.email}
//           onChange={handleInputChange}
//           leftIcon={<EmailIcon />}
//           isInvalid={errors.email}
//           isLoading={isLoading}
//           formErrorMessage="Email is required or invalid"
//         />
//       </Flex>
//       <Flex>
//         <CustomForm
//           label="Password"
//           id="password"
//           name="password"
//           type="password"
//           isLoading={isLoading}
//           value={forms.password}
//           onChange={handleInputChange}
//           leftIcon={<LockIcon />}
//           isInvalid={errors.password}
//           formErrorMessage="Password is required or invalid"
//         />
//       </Flex>
//       <Flex>
//         <Button
//           isLoading={isLoading}
//           type="submit"
//           colorScheme="teal"
//           variant="solid"
//           size="md"
//           width="100%"
//           onClick={handleOnClick}
//         >
//           Login
//         </Button>
//       </Flex>
//     </VStack>
//   );
// }

//     email: "",
//     password: "",
//   });
  
//   const [errors, setErrors] = useState({
//     email: false,
//     password: false,
//   });
  
//   const [isLoading, setIsLoading] = useState(false);
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setForms({ ...forms, [name]: value });
//   }

//   const handleOnClick = () => {
//     const { email, password } = forms;
//     setIsLoading(true);
//     setTimeout(() => {
//     const emailValid = isEmailValid(email);
//     const passwordValid = isPasswordValid(password);
//     setErrors({
//       email: !emailValid,
//       password: !passwordValid,
//     });
//     setIsLoading(false);
//     }, 1000);

//     console.log(forms);
//   }

//   return (
//     <VStack>
//       <Box>
//         <Heading>Login</Heading>
//       </Box>
//       <Flex>
//         <CustomForm
//           label="Email"
//           id="email"
//           name="email"
//           type="email"
//           value={forms.email}
//           onChange={handleInputChange}
//           leftIcon={<EmailIcon />}
//           isInvalid={errors.email}
//           isLoading={isLoading}
//           formErrorMessage="Email is required or invalid"
//         />
//       </Flex>
//       <Flex>
//         <CustomForm
//           label="Password"
//           id="password"
//           name="password"
//           type="password"
//           isLoading={isLoading}
//           value={forms.password}
//           onChange={handleInputChange}
//           leftIcon={<LockIcon />}
//           isInvalid={errors.password}
//           formErrorMessage="Password is required or invalid"
//         />
//       </Flex>
//       <Flex>
//         <Button
//           isLoading={isLoading}
//           type="submit"
//           colorScheme="teal"
//           variant="solid"
//           size="md"
//           width="100%"
//           onClick={handleOnClick}
//         >
//           Login
//         </Button>
//       </Flex>
//     </VStack>
//   );
// }
