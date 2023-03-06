import * as React from 'react';
import swal from "sweetalert";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import {NavListData } from '../../config';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;

const Layout = (props) => {

  const navigate = useNavigate();

  const location = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logoutHandler = () => {
    localStorage.removeItem("admin-token");
    localStorage.removeItem("user");
    handleMenuClose()
    swal("Success!", `Logout Successfully`, "success");
    navigate("/login");
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={()=>{handleMenuClose(); navigate("/settings")}}>Profile</MenuItem>
      <MenuItem onClick={()=>{handleMenuClose(); navigate("/settings")}}>My account</MenuItem>
      <MenuItem onClick={logoutHandler}>logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <img src="assets/images/messages.svg" alt="messages_img" />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
         <img src="assets/images/notifications.svg" alt="notifications_img" />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <img src="assets/images/profilepic.svg" alt="profile_img" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  const drawer = (
    <div>
      <Box sx={{width:"100%",height:"64px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Link to="/dashboard">
          <img src="assets/images/eatcoastlogosvg.svg" alt="logopic" />
        </Link>
      </Box>
      {
        NavListData && NavListData.map((item, index) => ( 
          <Box sx={{margin: "0 0 20px 0",color:"#9EA3AE"}} key={index}>
            <Box sx={{mt:"20px",pl:"16px"}}>
            <Typography sx={{fontSize:"14px",fontWeight:400}}>{item?.category}</Typography>
            </Box> 
            <List sx={{pl:"15px"}}>
              {
                item?.navListItemsArr && item?.navListItemsArr.map((item, index) => (  
                  <Box component={NavLink} to={item.link} key={index} 
                  sx={{color:"#9EA3AE",textDecoration:"none",my:"2px",'&.active':{color: "#559A95"},'&.active > li':{borderLeft: " 4px solid #559A95"}}}
                  >
                  <ListItem key={item.text} disablePadding sx={{color:"inherit"}}>
                  <ListItemButton disableRipple={true}>
                      <ListItemIcon sx={{minWidth: "24px",mr:"10px"}}>
                        <img width="100%" src={item.icon} alt="logopic" />
                      </ListItemIcon>
                      <ListItemText primary={item.text} sx={{color:"inherit"}} />
                  </ListItemButton>
                  </ListItem>
                </Box>
                 ))
              }
            </List>
          </Box>
        ))
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
console.log("location.pathname => ",location.pathname.split("/")[1])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />  
          <Box>
            <Typography sx={{fontSize:"20px",fontWeight:"600",m:"10px 0 5px 0",textTransform:"capitalize"}}>
              {/* Dashboard */}
              {location.pathname === "/" ? "Dashboard" 
              : 
                location.pathname.split("/")[1].includes("_") ? `${location.pathname.split("/")[1].split("_")[0]} ${location.pathname.split("/")[1].split("_")[1]}` : `${location.pathname.split("/")[1]}`
              }
            </Typography>
            <Typography sx={{fontSize:"14px",fontWeight:"400",mb:"10px",color:"#9EA3AE"}}>
              Thu,28 Nov 2021
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{ display: { xs: 'none',sm: 'block' },backgroundColor:"#E1E1E6",'&:hover':{backgroundColor:"#E1E1E6",} }}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:"#9EA3AE"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
               <img src="assets/images/messages.svg" alt="messages_img" />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <img src="assets/images/notifications.svg" alt="notifications_img" />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img src="assets/images/profilepic.svg" alt="profile_img" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)`,marginTop:"80px"} }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;





/* <List sx={{pl:"15px"}}>
{['User Role'].map((text, index) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon sx={{minWidth: "30px",color:"#9EA3AE"}}>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
))}
</List> */











// import * as React from 'react';
// import swal from "sweetalert";
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { styled, alpha } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import {NavListData } from '../../config';
// import { Link, useNavigate } from 'react-router-dom';

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// const drawerWidth = 240;

// const Layout = (props) => {

//   const navigate = useNavigate();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("admin-token");
//     localStorage.removeItem("user");
//     handleMenuClose()
//     swal("Success!", `Logout Successfully`, "success");
//     navigate("/login");
//   }

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//       <MenuItem onClick={logoutHandler}>logout</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <img src="assets/images/messages.svg" alt="messages_img" />
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//          <img src="assets/images/notifications.svg" alt="notifications_img" />
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <img src="assets/images/profilepic.svg" alt="profile_img" />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );



//   const drawer = (
//     <div>
//       <Box sx={{width:"100%",height:"64px",display:"flex",justifyContent:"center",alignItems:"center"}}>
//         <Link to="/dashboard">
//           <img src="assets/images/eatcoastlogosvg.svg" alt="logopic" />
//         </Link>
//       </Box>
//       {
//         NavListData && NavListData.map((item, index) => ( 
//           <Box sx={{margin: "0 0 20px 0",color:"#9EA3AE"}} key={index}>
//             <Box sx={{mt:"20px",pl:"16px"}}>
//             <Typography sx={{fontSize:"14px",fontWeight:400}}>{item?.category}</Typography>
//             </Box> 
//             <List sx={{pl:"15px"}}>
//               {
//                 item.category === 'Main' ? 
//                 (
//                   item?.navListItemsArr && item?.navListItemsArr.map((item, index) => (  
//                     <ListItem key={item.text} disablePadding sx={{borderLeft: "4px solid #2B817B"}}>
//                       <Link to={item.link} style={{color:"#9EA3AE",textDecoration:"none"}}>
//                         <ListItemButton>
//                           <ListItemIcon sx={{minWidth: "24px",mr:"10px"}}>
//                             <img width="100%" src={item.icon} alt="logopic" />
//                           </ListItemIcon>
//                           <ListItemText primary={item.text} sx={{color:"#559A95"}} />
//                         </ListItemButton>
//                       </Link>
//                     </ListItem>
//                   ))
//                 )
//                 : 
//                 (
//                   item?.navListItemsArr && item?.navListItemsArr.map((item, index) => (  
//                     <ListItem key={item.text} disablePadding>
//                       <Link to={item.link} style={{color:"#9EA3AE",textDecoration:"none"}}>
//                         <ListItemButton>
//                           <ListItemIcon sx={{minWidth: "24px",mr:"10px"}}>
//                             <img width="100%" src={item.icon} alt="logopic" />
//                           </ListItemIcon>
//                           <ListItemText primary={item.text}/>
//                         </ListItemButton>
//                       </Link>
//                     </ListItem>
//                   ))
//                 )
//               }
//             </List>
//           </Box>
//         ))
//       }
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: "white",
//           color: "black",
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: 'none' } }}
//             >
//               <MenuIcon />
//             </IconButton>
//           <Box sx={{ flexGrow: 1, display: { sm: 'none' } }} />  
//           <Box>
//             <Typography sx={{fontSize:"20px",fontWeight:"600",m:"10px 0 5px 0"}}>
//               Dashboard
//             </Typography>
//             <Typography sx={{fontSize:"14px",fontWeight:"400",mb:"10px",color:"#9EA3AE"}}>
//               Thu,28 Nov 2021
//             </Typography>
//           </Box>
//           <Box sx={{ flexGrow: 1 }} />
//           <Search sx={{ display: { xs: 'none',sm: 'block' },backgroundColor:"#E1E1E6",'&:hover':{backgroundColor:"#E1E1E6",} }}>
//             <SearchIconWrapper>
//               <SearchIcon sx={{color:"#9EA3AE"}} />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                <img src="assets/images/messages.svg" alt="messages_img" />
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <img src="assets/images/notifications.svg" alt="notifications_img" />
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <img src="assets/images/profilepic.svg" alt="profile_img" />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)`,marginTop:"80px"} }}
//       >
//         {props.children}
//       </Box>
//     </Box>
//   );
// }

// Layout.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Layout;





/* <List sx={{pl:"15px"}}>
{['User Role'].map((text, index) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon sx={{minWidth: "30px",color:"#9EA3AE"}}>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
))}
</List> */