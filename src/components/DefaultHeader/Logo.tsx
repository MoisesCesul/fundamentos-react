import { Image } from "@chakra-ui/react";
import logoLight from "../../../public/assets/logo-cesul-dark.png";
import logoDark from "../../../public/assets/logo-cesul-white.png";
import { useColorMode } from "../ui/color-mode";

export function Logo() {
  const { colorMode } = useColorMode();
  const imageTheme = colorMode === "dark" ? logoDark : logoLight;
  return <Image w={"130px"} src={imageTheme.src} height={"60px"} />;
}
