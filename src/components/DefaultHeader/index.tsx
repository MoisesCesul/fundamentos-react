import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { TbHelpHexagon, TbSettingsAutomation } from "react-icons/tb";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";
import logoLight from "../../../public/assets/logo-cesul-dark.png";
import logoDark from "../../../public/assets/logo-cesul-white.png";


export default function DefaultHeader() {
  const { toggleColorMode, colorMode } = useColorMode();
  const iconColor = colorMode === "dark" ? "white" : "gray";
  const imageTheme = colorMode === "dark" ? logoDark : logoLight;
  return (

    <Flex
      justify={"space-between"}
      w="full"
      py={2}
      px={4}
      borderBottomWidth={1}
    >
      <Flex align={"center"} gap={4}>
        <IconButton variant={"ghost"} rounded={"full"}>
          <SlMenu />
        </IconButton>
        <Image w={"130px"} src={imageTheme.src} height={"60px"} />
      </Flex>
      <Group>
        <IconButton variant={"ghost"} rounded={"full"} >
          <IoNotificationsSharp color={iconColor} />
        </IconButton>
        <IconButton variant={"ghost"} rounded={"full"}>
          <TbHelpHexagon color={iconColor} />
        </IconButton>
        <IconButton variant={"ghost"} rounded={"full"}>
          <TbSettingsAutomation color={iconColor} />
        </IconButton>

        <IconButton variant={"ghost"} rounded={"full"} onClick={toggleColorMode}>
          {colorMode === "dark" ? (
            <FaSun color={iconColor} />
          ) : (
            <FaRegMoon color={iconColor} />
          )}
        </IconButton>

        <Separator
          h={6}
          colorPalette={"red"}
          orientation={"vertical"}
          color={iconColor}
          mx="2"
        />
        <Avatar
          src="https://avatars.githubusercontent.com/u/6463742?v=4"
          name="Juliano Ramos"
          colorPalette={"purple"}
        />
      </Group>
    </Flex>
  )
}
