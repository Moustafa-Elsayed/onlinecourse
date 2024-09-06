import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../../public/Image/Logo.webp";
import useToggle from "@/hooks/useToggle";
import CartButton from "../shared/CartButton";
import NavMenu from "./navbarComponents/NavMenu";
import ProfileMenu from "./navbarComponents/ProfileMenu";
import { useMediaQuery } from "@mui/material";
const NavBar = () => {
  const router = useRouter();
  const [isLogin, toggleIsLogin] = useToggle(true);
  const [activeButton, setActiveButton] = React.useState("login");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleLoginRoute = () => {
    setActiveButton("login");
    toggleIsLogin();
    router.push("/login");
  };

  const handleCartPage = () => {
    router.push("/cart");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
    >
      <Container sx={{ backgroundColor: "transparent" }}>
        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
          <Image src={Logo} alt="logo" width={50} height={50} />
          <Box sx={{ flexGrow: 1 }} />{" "}
          {/* Show NavMenu only if not on mobile */}
          {!isMobile && <NavMenu router={router} />}
          <Box sx={{ mr: 2 }}>
            <CartButton handleCartPage={handleCartPage} />
          </Box>
          {/* Show ProfileMenu always, or conditionally if needed */}
          <ProfileMenu
            isLogin={isLogin}
            activeButton={activeButton}
            handleLoginRoute={handleLoginRoute}
          />
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <NavMenu router={router} />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
