// components/NavBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { useRouter } from 'next/router';
import theme from '@/styles/theme';
import CustomButton from '../shared/CustomButton';
import useButtonClickHandler from '@/hooks/useButtonClickHandler';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { showToast } from '../shared/showToast';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import CartButton from '../shared/CartButton';
import { clearUserData } from '@/redux/slices/userSlice';
import ProfileDialog from '../profile/ProfileDialog';
import useToggle from '@/hooks/useToggle';
import Logo from "../../../public/Image/Logo.png";

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'About Us', path: '/aboutus' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact us', path: '/contactus' },
];

const NavBar = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = React.useState(false);  // State to control dialog visibility
  const handleDashboard = useButtonClickHandler('/adminpanel');
  const handleCartPage = useButtonClickHandler('/cart');
  const handleLoginRoute = useButtonClickHandler('/login');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userData = useSelector((state) => state?.user);
  const token = Cookies.get('token');
  const role = Cookies.get('role');

  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('role');
    handleLoginRoute();
    dispatch(clearUserData());
    showToast('Logout successful!', 'success');
    setAnchorEl(null);
  };

  const router = useRouter();
  const [isLogin, toggleIsLogin] = useToggle(true);
  const [activeButton, setActiveButton] = React.useState('login');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    toggleIsLogin();
  };

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

  const handleOpenProfileDialog = () => {
    setProfileDialogOpen(true);
    handleClose();
  };

  const handleCloseProfileDialog = () => {
    setProfileDialogOpen(false);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xxl" sx={{ backgroundColor: 'transparent' }}>
        <Toolbar disableGutters>
          <Image src={Logo} alt="logo" width={50} height={50} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ></Typography>
          <Box
            sx={{
              flexGrow: 1,
              ml: 5,
              alignItems: 'center',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavItemClick(page.path)}
                sx={{
                  my: 2,
                  color: theme.palette.primary.main,
                  display: 'block',
                  textTransform: 'capitalize',
                  backgroundColor:
                    router.pathname === page.path ? '#c4c4c442' : 'transparent',
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
          <Box sx={{ mr: 2 }}>
            <CartButton handleCartPage={handleCartPage} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {token ? (
              <React.Fragment>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {role === 'ADMIN' && (
                    <Box
                      sx={{
                        border: `1px solid ${theme.palette.secondary.main}`,
                        p: 1,
                        borderRadius: 3,
                      }}
                    >
                      <CustomButton
                        backgroundColor={theme.palette.secondary.main}
                        color="white"
                        title="Admin Dashboard"
                        onClick={handleDashboard}
                      />
                    </Box>
                  )}
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar
                      sx={{ width: 50, height: 50 }}
                      src={
                        userData?.avatar
                          ? `http://localhost:3000/${userData.avatar}`
                          : undefined
                      }
                      alt={userData?.username}
                    >
                      {!userData?.avatar && userData?.username?.charAt(0).toUpperCase()}
                    </Avatar>
                  </IconButton>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleOpenProfileDialog}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <>
                <CustomButton
                  title="Login"
                  backgroundColor={
                    activeButton === 'login'
                      ? theme.palette.secondary.main
                      : 'transparent'
                  }
                  color={activeButton === 'login' ? 'white' : 'black'}
                  onClick={handleLoginRoute}
                />
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavItemClick(page.path)}
                >
                  <Typography textAlign="center" sx={{ color: 'black' }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <ProfileDialog
        open={profileDialogOpen}
        onClose={handleCloseProfileDialog}
        userData={userData}
      />
    </AppBar>
  );
};

export default NavBar;
