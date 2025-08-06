import { Button, Link as ChakraLink, Field, Flex, Heading, HStack, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import loginImage from "../../public/assets/logo.gif"
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import z, { email } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signInFormSchema = z.object({
  email: z.email("Digite um e-mail válido").nonempty("O e-mail é obrigatorio"),
  password: z.string().nonempty("A senha é obrigatorio").min(8,"a senha deve ter pelo menos 8 caracteres")
});

type SignInFormData = z.infer<typeof signInFormSchema>;


export default function Login() {
  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: zodResolver(signInFormSchema)
  });


  function handleSignIn(data:SignInFormData){
    console.log(data);
  }

  return (
    <Flex w="100vw" h="100vh">
      <Flex w="50%" bg="#2C73EB" align="center" justify="center">

        <Image w={500} h={500} src={loginImage.src} />
      </Flex>
      <VStack w="50%" justify={"center"} >
        <Stack  >
          <Heading as={"h1"} fontSize={"3xl"} fontWeight={"bold"} color={"black"}>Entrar</Heading>
          <Text fontSize={"lg"} fontWeight={"normal"} color={"gray.400"}>Se você já membro, você pode fazer login com email e senha</Text>
          <VStack as="form" onSubmit={handleSubmit((data)=>{handleSignIn(data)})} gap={6} align={"flex-start"} mt={10}>

            <Field.Root invalid={!!errors.email}>
              <Field.Label color={"gray.500"} font={"md"} >
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input type="email" h={16} colorPalette={"blue"} borderRadius={"md"} color={"black"} {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>


            <Field.Root  invalid={!!errors.password} >
              <Field.Label color={"gray.500"} font={"md"}>
                Senha <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput h={16} colorPalette={"blue"} borderRadius={"md"} color={"black"}  {...register("password") } />
                   <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>


            <Checkbox colorPalette={"blue"} color={"gray.500"} fontSize={"md"} fontWeight={"medium"}>
              Lembre-me
            </Checkbox>
            <Button h={16} width={"full"} colorPalette={'blue'} borderRadius={"md"} fontSize={"md"} fontWeight={"medium"} type="submit">
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
