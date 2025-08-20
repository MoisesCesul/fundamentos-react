import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import DefaultHeader from "@/components/DefaultHeader";


type DefualtLayoutProps = {
  children: ReactNode;
};

export function DefaultLayout({ children }: DefualtLayoutProps) {
  return (
    <Flex flexDir={"column"}>
      <DefaultHeader/>
      {children}
    </Flex>
  );
}
