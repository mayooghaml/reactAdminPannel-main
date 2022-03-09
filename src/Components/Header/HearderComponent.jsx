import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Users from "./ActionTab/Users";
import Templates from "../BodyComponent/Templates ";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";


export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Jai siya ram");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("prem se bolo Jai siya ram");
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/Templates' render={() => <Templates/>} />
          {/* <Route exact path='/link1' render={() => <Link1 />} /> */}
          <Route exact path='/Users' render={() => <Users />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
