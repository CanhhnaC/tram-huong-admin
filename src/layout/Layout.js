import React from "react";
import { Layout } from "react-admin";
import { lightTheme } from "./themes";

import AppBar from "./AppBar";

export default (props) => {
  const theme = lightTheme;
  return <Layout {...props} appBar={AppBar} theme={theme} />;
};
