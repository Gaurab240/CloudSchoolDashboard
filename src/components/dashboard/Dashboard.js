import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Cards from "../cards/Cards";
import "./Dashboard.css";
import Charts from "../chart/Charts";
import CopyRight from "../copyRight/CopyRight";
import ScreenWidthFinder from "../cards/ScreenWidthFinder";
import { BiMinus } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="forSidebar">
        <Sidebar />
      </div>
      <div className="forCardsAndBar">
        <Cards />
        <div className="chartAndCopyright">
          <div
            style={{
              marginTop: "10px",
              borderTop: "2px solid #358e9d",
              background: "white",
            }}
          >
            <div className="h2AndIcons">
              <div>
                <h2>Students Today's Attendence</h2>
              </div>

              <div style={{ paddingRight: "10px", display: "flex" }}>
                <div style={{ marginRight: "10px" }}>
                  <BiMinus />
                </div>
                <div>
                  <RxCross1 />
                </div>
              </div>
            </div>

            <Charts />
            <ScreenWidthFinder />
          </div>
          <div className="dashboardCopyright">
            <CopyRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
