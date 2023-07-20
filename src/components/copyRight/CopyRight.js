import React from "react";
import "./CopyRight.css";

const CopyRight = () => {
  return (
    <div className="copyRight">
      <div>
        <p>
          <b>
            Copyright © 2020{" "}
            <span style={{ color: "#358e9d" }}>CloudSchool BD. </span>
          </b>
          All rights reserved.
        </p>
      </div>

      <div>
        <p>
          <b>CloudSchool v3.0.0-ce</b> | Developed by{" "}
          <span style={{ color: "#358e9d" }}>CloudSchool </span>
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
