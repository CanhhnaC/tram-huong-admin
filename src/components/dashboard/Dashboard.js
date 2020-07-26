import React from "react";
import Welcome from "./Welcome";

import { Product, Posts, Events, Types } from "./Card";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};
const Spacer = () => <span style={{ width: "1em" }} />;

const Dashboard = () => {
  return (
    <>
      <Welcome />
      <div style={styles.leftCol}>
        <div style={styles.flex}>
          <Product value="Something" link="" />
          <Spacer />
          <Types value="Something" />
          <Spacer />
          <Events value="Something" />
          <Spacer />
          <Posts value="Something" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
