import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "@/styles/theme";

const pages = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/aboutus" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact us", path: "/contactus" },
];

const NavMenu = ({ router }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavItemClick = (path) => {
    handleCloseNavMenu();
    router.push(path);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          flexGrow: 1,
          ml: 5,
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
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
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="black"
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
    </React.Fragment>
  );
};

export default NavMenu;
