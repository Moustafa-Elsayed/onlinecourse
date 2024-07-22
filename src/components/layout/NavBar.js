import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import theme from "@/styles/theme";
import CustomButton from "../shared/CustomButton";
import useToggle from "@/hooks/useToggle";
import Logo from "../../../public/Image/Logo.png";

const pages = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/about-us" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact us", path: "/contactus" },
];

const NavBar = () => {
  const router = useRouter();
  const [isLogin, toggleIsLogin] = useToggle(true);

  const [activeButton, setActiveButton] = React.useState("login");
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    toggleIsLogin();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavItemClick = (path) => {
    handleCloseNavMenu();
    router.push(path);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: "transparent" }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar disableGutters>
          <Image src={Logo} alt="logo" width={50} height={50} />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, ml: 5, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavItemClick(page.path)}
                sx={{
                  my: 2,
                  color: theme.palette.primary.main,
                  display: "block",
                  textTransform: "capitalize",
                  backgroundColor:
                    router.pathname === page.path ? "#c4c4c442" : "transparent",
                  color:
                    router.pathname === page.path
                      ? theme.palette.primary.main
                      : theme.palette.primary.main,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <CustomButton
              title="Sign Up"
              backgroundColor={
                activeButton === "signUp"
                  ? theme.palette.secondary.main
                  : "transparent"
              }
              color={activeButton === "signUp" ? "white" : "black"}
              sx={{ ml: 2 }}
              onClick={() => handleButtonClick("signUp")}
            />
            <CustomButton
              title="Login"
              backgroundColor={
                activeButton === "login"
                  ? theme.palette.secondary.main
                  : "transparent"
              }
              color={activeButton === "login" ? "white" : "black"}
              onClick={() => handleButtonClick("login")}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="red"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavItemClick(page.path)}
                >
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
