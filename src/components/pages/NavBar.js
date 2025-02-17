import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SchoolIcon from "@material-ui/icons/School";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InfoIcon from "@material-ui/icons/Info";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { useLocation } from "react-router";
import { Paper } from "@material-ui/core";

//import { Link } from "react-scroll";

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginRight: "0.5rem",
  },
  drawerPaper: {
    width: drawerWidth,
    marginLeft: 4,
    borderRadius: 12,
  },

  paperAnchorLeft: {
    borderRight: 0,
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  navItemsSelectedDark: {
    color: "#e65100",
    borderRadius: 10,
    "&.active": {
      backgroundColor: "rgba(0,0,0,0)",
      backdropFilter: "blur(13px) saturate(100%)",
    },
    "& .MuiListItemIcon-root": {
      color: "#e65100",
    },
    "&:hover": {
      color: "white",
    },
  },

  navIcons: {
    justifyContent: "center",
  },
}));

const Navbar = ({
  isMobile,
  executeScroll,
  aboutRef,
  bioRef,
  portfolioRef,
  contactRef,
}) => {
  const classes = useStyles();
  const location = useLocation();

  const menuItems = [
    {
      text: "About Me",
      icon: <InfoIcon />,
      color: "secondary",
      path: "/",
      ref: aboutRef,
    },
    {
      text: "Resume",
      icon: <SchoolIcon />,
      color: "secondary",
      path: "/resume",
      ref: bioRef,
    },
    {
      text: "Projects",
      icon: <BusinessCenterIcon />,
      color: "secondary",
      path: "/portfolio",
      ref: portfolioRef,
    },
    {
      text: "Contact",
      icon: <BusinessCenterIcon />,
      color: "secondary",
      path: "/ContactMe",
      ref: contactRef,
    },
  ];

  return (
    <Paper className={classes.root} elevation={4}>
      <Drawer
        variant="persistent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
          paperAnchorLeft: classes.paperAnchorLeft,
        }}
        className={classes.drawer}
        open={!isMobile}
      >
        {/* //component="nav" */}

        <List>
          {menuItems.map((item) => (
            <ListItem
              onClick={() => {
                executeScroll(item.ref);
              }}
              key={item.text}
              button
              dense
              component={NavLink}
              to={item.path}
              className={classes.navItems}
              selected={item.path === location.pathname}
              classes={{ selected: classes.navItemsSelectedDark }}
            >
              <ListItemIcon className={classes.navIcons}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Paper>
  );
};

export default Navbar;
