import React from "react";
import { Layout, Sidebar } from "react-admin";

import Menu from "./Menu";

const CustomSidebar = (props) => <Sidebar {...props} />;

export default (props) => {
  return <Layout {...props} menu={Menu} />;
};
