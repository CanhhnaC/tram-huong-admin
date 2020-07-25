import React, { useState } from "react";
import { useSelector } from "react-redux";
import SettingsIcon from "@material-ui/icons/Settings";
import LabelIcon from "@material-ui/icons/Label";
import { useMediaQuery, Theme } from "@material-ui/core";
import { useTranslate, DashboardMenuItem, MenuItemLink } from "react-admin";

import products from "../components/products";
import types from "../components/type";
import SubMenu from "./SubMenu";

const Menu = ({ onMenuClick, dense, logout }) => {
  const [state, setState] = useState({ menuProduct: false });
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div>
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      <SubMenu
        handleToggle={() => handleToggle("menuProduct")}
        isOpen={state.menuProduct}
        name="Sản phẩm"
        dense={dense}
      >
        <MenuItemLink
          to={`/products`}
          primaryText={`Sản phẩm`}
          leftIcon={<products.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/types`}
          primaryText={`Thể loại`}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
    </div>
  );
};

export default Menu;
