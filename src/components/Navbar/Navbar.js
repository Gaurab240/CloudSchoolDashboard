import React from "react";
import "./Navbar.css";
import logo1 from './logo.png';
import PublicIcon from "@mui/icons-material/Public";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div className="navbarDashboard">
      <div className="navDash">
      <div className='logo'>
            <img src={logo1}   alt='logo' height="50px" width="100%" margin="0px"/>
        </div>
        <div className="hambergurAndIcon">
          <div className="hambergur">
            <MenuIcon />
          </div>

          <div className="nIcon">
            <div>
              <PublicIcon />
            </div>
            <div>
              <NotificationsIcon />
            </div>

            <div className="forMrAdmin">
              <div>
                <PermIdentityIcon />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p>Mr. Admin</p>
                <ArrowDropDownIcon />
              </div>
            </div>

            <div>
              <SettingsSuggestIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
