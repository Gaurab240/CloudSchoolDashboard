import React from "react";
import logo1 from "./logo.png";
import { SidebarData } from "../../Data/Data";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <div className='logo'>
            <img src={logo1}  alt='logo' height="50px" width="100%"/>
        </div> */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className="menuItems"
              key={item.id}
              style={{ backgroundColor: index === 0 ? "#358e9d" : "inherit" }}
            >
              <div className="firstIconAndHeading">
                <div className="firstIcon">
                  <item.icon />
                </div>

                <div className="heading">
                  <span style={{ fontSize: "90%" }}>{item.heading}</span>
                </div>
              </div>

              <div
                style={{
                  justifyContent: "flex-end",
                  textAlign: "right",
                  alignSelf: "right",
                  flex: "1",
                  marginRight: "10px",
                }}
              >
                {item.iconn && <item.iconn />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
