import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const tabOptions = ["home", "stories", "signup"];
const loggedInTabsOptions = ["home", "stories", "create", "profile"];

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar sx={{ bgcolor: "transparent", position: "sticky", backgroundColor:"#99ccff" }}>
      <Toolbar>
        <HistoryEduIcon LinkComponent={Link} to={`/home`} sx={{ color: "black", fontSize: 40}} />

        <Tabs
          value={value}
          onChange={(e, val) => setValue(val)}
          sx={{ ml: "auto", }}
        >
          {isLoggedIn
            ? loggedInTabsOptions.map((tab) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${tab === "home" ? "" : tab}`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                  key={tab}
                  label={tab}
                />
              ))
            : tabOptions.map((link) => (
                <Tab
                  LinkComponent={Link}
                  to={`/${link === "home" ? "" : link}`}
                  sx={{
                    textDecoration: "none",
                    ":hover": {
                      textDecoration: "underline",
                      textUnderlineOffset: "18px",
                    },
                  }}
                  key={link}
                  label={link}
                />
              ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
