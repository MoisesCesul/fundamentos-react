import { Button, Link as ChakraLink, Field, Flex, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import loginImage from "../../public/assets/logo.gif"
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";
import { PasswordInput, PasswordStrengthMeter } from "@/components/ui/password-input";

export default function Login() {
  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">

        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify={"center"} >
        <Stack  >
          <Heading as={"h1"} fontSize={"3xl"} fontWeight={"bold"} color={"black"}>Entrar</Heading>
          <Text fontSize={"lg"} fontWeight={"normal"} color={"gray.400"}>Se você já membro, você pode fazer login com email e senha</Text>
          <VStack gap={6} align={"flex-start"} mt={10}>

            <Field.Root>
              <Field.Label color={"gray.500"} font={"md"} >
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input type="email" h={16} colorPalette={"blue"} borderRadius={"md"} color={"black"} />
            </Field.Root>


            <Field.Root>
              <Field.Label color={"gray.500"} font={"md"}>
                Senha <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput h={16} colorPalette={"blue"} borderRadius={"md"} color={"black"}  />
            </Field.Root>


            <Checkbox colorPalette={"blue"} color={"gray.500"} fontSize={"md"} fontWeight={"medium"}>
              Lembre-me
            </Checkbox>
            <Button h={16} width={"100%"} colorPalette={'blue'} borderRadius={"md"} fontSize={"md"} fontWeight={"medium"}>
              Entrar
            </Button>
          </VStack>
          <HStack mt={10} justify="center" gap={1} fontSize={"md"} fontWeight={"medium"}>
            <Text color={"gray.500"}>Não possui uma conta?</Text>
            <ChakraLink asChild color={"blue.500"}>
              <NextLink href="/sign-up">Criar CONTA</NextLink>
            </ChakraLink>
          </HStack>

        </Stack>
      </VStack>
    </Flex>
  )
}
