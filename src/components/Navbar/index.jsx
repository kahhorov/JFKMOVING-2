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
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
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
  // accordion
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
            sx={{
              background: "#fff",
              height: "80px",
              display: "flex",
              alignItems: "space-between",
              justifyContent: "center",
            }}
          >
            <Toolbar
              sx={{
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: "flex",
                  color: "black",
                  justifyContent: "start",
                }}
              >
                <img src={site_logo} alt="" width={150} />
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
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    className={styles.accordion}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                      className={styles.navTitleHover}
                    >
                      Company
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className={styles.navItem}>
                        About Us
                      </Typography>
                      <Typography className={styles.navItem}>Blog</Typography>
                      <Typography className={styles.navItem}>
                        Donations
                      </Typography>
                      <Typography className={styles.navItem}>
                        License
                      </Typography>
                      <Typography className={styles.navItem}>Claims</Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      <Typography
                        component="span"
                        sx={{ width: "33%", flexShrink: 0 }}
                      >
                        Users
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ color: "text.secondary" }}
                      >
                        You are currently not an owner
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus
                        feugiat lectus, varius pulvinar diam eros in elit.
                        Pellentesque convallis laoreet laoreet.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography
                        component="span"
                        sx={{ width: "33%", flexShrink: 0 }}
                      >
                        Advanced settings
                      </Typography>
                      <Typography
                        component="span"
                        sx={{ color: "text.secondary" }}
                      >
                        Filtering has been entirely disabled for whole web
                        server
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      <Typography
                        component="span"
                        sx={{ width: "33%", flexShrink: 0 }}
                      >
                        Personal data
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat
                        nisl. Integer sit amet egestas eros, vitae egestas
                        augue. Duis vel est augue.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Box>
            </List>
            <List
              sx={{
                height: "100%",
                alignItems: "end",
                display: "flex",
                paddingBottom: "30px",
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
