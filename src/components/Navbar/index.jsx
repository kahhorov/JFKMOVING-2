import * as React from "react";
// css
import styles from "./style.module.css";
// bootstrap
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

// images
import site_logo from "../../Images/Svg/site-logo.svg";
// icons
import { FaPhoneAlt } from "react-icons/fa";
import RadiusBtn from "../RadiusBtn";
// mui
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
export default () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [isMobile, setIsMobile] = React.useState(
    window.matchMedia("(max-width: 991px)").matches
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const handleChange = (e) => setIsMobile(e.matches);

    // Dastlabki qiymat va listener
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      variants: [
        {
          props: ({ open }) => open,
          style: {
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
          },
        },
      ],
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ zIndex: "1000" }}>
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            position: "relative",
          }}
        >
          <CssBaseline />
          <AppBar
            position="fixed"
            className={scrolled ? styles.scrolled : styles.show}
            sx={{ background: "#fff" }}
          >
            <Toolbar
              sx={{
                justifyContent: "end",
                gap: "20px",
              }}
            >
              <Typography variant="h6" noWrap component="div">
                Persistent drawer
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={[
                  {
                    mr: 2,
                    color: "#a8324a",
                  },
                ]}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                height: "104vh",
                position: "fixed",
                width: "320px",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button className={styles.appBarBtn}>
                Online Booking Available
              </button>

              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" && <CloseIcon />}
              </IconButton>
            </DrawerHeader>
            <hr style={{ margin: "0px 0 0 0" }} />
            <List>
              <Box sx={{ padding: 2 }}>
                <div className={styles.BarList}>
                  <NavDropdown
                    title={
                      <span className={styles.navTitleHover2}>Company</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Blog
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Donations
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      License
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action5"
                      className={styles.navItem}
                    >
                      Claims
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span className={styles.navTitleHover2}>Moving</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Residential
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Commercial
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Local
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      Long Distance
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span className={styles.navTitleHover2}>Servis</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Packing and Unpacking
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Piano and Pool Table Moving
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Boxes and Supplies
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      Junk Removal
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">
                    <span className={styles.navTitleHover2}>Shop</span>
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <span className={styles.navTitleHover2}>Cities</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Los Angeles County Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Orange Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Riverside Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      San Diego Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action5"
                      className={styles.navItem}
                    >
                      San Bernardino Movers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">
                    <span className={styles.navTitleHover2}> Guide</span>
                  </Nav.Link>
                </div>
              </Box>
            </List>
            <List
              sx={{
                height: "100%",
                alignItems: "end",
                display: "flex",
              }}
            >
              <Box sx={{ padding: 2 }}>
                <div className={styles.phone}>
                  <span className={styles.navPhone}>
                    <FaPhoneAlt />
                  </span>
                  <span className={styles.number}>(877) 671-3535</span>
                </div>
              </Box>
            </List>
          </Drawer>
        </Box>
      ) : (
        <header className={styles.navbar}>
          <div className={styles.container}>
            {scrolled ? (
              <nav className={styles.scroll}>
                <div className={styles.siteLogo}>
                  <img src={site_logo} alt="site logo" width={160} />
                </div>
                <div className={styles.siteList1}>
                  <NavDropdown
                    title={
                      <span className={styles.navTitleHover}>Company</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Blog
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Donations
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      License
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action5"
                      className={styles.navItem}
                    >
                      Claims
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={<span className={styles.navTitleHover}>Moving</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Residential
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Commercial
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Local
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      Long Distance
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={<span className={styles.navTitleHover}>Servis</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Packing and Unpacking
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Piano and Pool Table Moving
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Boxes and Supplies
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      Junk Removal
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title={<span className={styles.navTitleHover}>Cities</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Los Angeles County Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Orange Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Riverside Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      San Diego Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action5"
                      className={styles.navItem}
                    >
                      San Bernardino Movers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1" className={styles.navTitleHover}>
                    Guide
                  </Nav.Link>
                  <span className={styles.navPhone}>
                    <FaPhoneAlt />
                  </span>
                  <button className={styles.navBtn}>
                    Online Booking Available
                  </button>
                </div>
              </nav>
            ) : (
              <nav className={styles.siteNav}>
                <div className={styles.siteLogo}>
                  <img src={site_logo} alt="site logo" width={160} />
                </div>
                <div className={styles.siteList}>
                  <NavDropdown
                    title={
                      <span className={styles.navTitleHover}>Company</span>
                    }
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Blog
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Donations
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      License
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action5"
                      className={styles.navItem}
                    >
                      Claims
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={<span className={styles.navTitleHover}>Moving</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Residential
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Commercial
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Local
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      Long Distance
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={<span className={styles.navTitleHover}>Servis</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Packing and Unpacking
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Piano and Pool Table Moving
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Boxes and Supplies
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      Junk Removal
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title={<span className={styles.navTitleHover}>Cities</span>}
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item
                      href="#action1"
                      className={styles.navItem}
                    >
                      Los Angeles County Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action2"
                      className={styles.navItem}
                    >
                      Orange Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action3"
                      className={styles.navItem}
                    >
                      Riverside Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action4"
                      className={styles.navItem}
                    >
                      San Diego Movers
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action5"
                      className={styles.navItem}
                    >
                      San Bernardino Movers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1" className={styles.navTitleHover}>
                    Guide
                  </Nav.Link>
                </div>
              </nav>
            )}
            <hr className={styles.navLine} />
            <div className={styles.navConnect}>
              <div className={styles.phone}>
                <span className={styles.navPhone}>
                  <FaPhoneAlt />
                </span>
                <span className={styles.number}>(877) 671-3535</span>
              </div>
              <RadiusBtn />
            </div>
          </div>
        </header>
      )}
    </div>
  );
};
